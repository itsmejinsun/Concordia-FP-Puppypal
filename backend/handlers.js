'use strict';

const assert = require('assert');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

const { PET_HOLIDAY_MONTH, PET_HOLIDAY_DAYS } = require('./data.js');

const {
    connectMongo,
    cloudinary,
    sendResponse,
    validatePuppyAdd,
} = require('./utils');

// FIND user data
// if there is no user, create user then find
const addUser = async (req, res) => {
    const {
        given_name,
        family_name,
        nickname,
        name,
        picture,
        sub,
        updated_at,
    } = req.body;

    try {
        const db = await connectMongo();

        const findUser = await db.collection(sub).findOne({ _id: sub });

        if (!findUser) {
            const insertUser = await db.collection(sub).insertOne({
                _id: sub,
                type: 'user',
                given_name,
                family_name,
                nickname,
                name,
                picture,
                sub,
                updated_at,
            });

            return sendResponse(res, 200, null, `Welcome, ${given_name}`);
        }

        return sendResponse(res, 200, null, `Welcome back, ${given_name}`);
    } catch (err) {
        sendResponse(res, 500, null, 'Error occured with find user request');
    }
};

// POST puppy data
const addPuppy = async (req, res) => {
    const { userId } = req.params;
    const puppyInfo = req.body;

    try {
        const db = await connectMongo();

        const validate = validatePuppyAdd(res, puppyInfo);

        if (validate) {
            sendResponse(res, 400, puppyInfo, validate);
            return;
        }

        const insertPuppy = await db.collection(userId).insertOne({
            ...puppyInfo,
            _id: uuidv4(),
            name: puppyInfo.name.toLowerCase(),
            active: true,
            update_at: moment().format(),
        });
        assert.equal(true, insertPuppy.acknowledged);

        if (!insertPuppy.acknowledged) {
            sendResponse(res, 400, puppyInfo, 'Register puppy is failed');
        }

        return sendResponse(res, 200, puppyInfo);
    } catch (err) {
        sendResponse(res, 500, null, 'Error occured with add puppy request');
    }
};

// GET all puppy data
// ????TODO: decide which data to send after avatar uploaded
const getAllPuppy = async (req, res) => {
    const { userId } = req.params;

    try {
        const db = await connectMongo();

        const findAllPuppy = await db
            .collection(userId)
            .find({ type: 'puppy', active: true })
            .toArray();

        if (!findAllPuppy) {
            sendResponse(res, 400, puppyInfo, 'Puppy not found');
        }

        return sendResponse(res, 200, findAllPuppy);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with get all puppy request'
        );
    }
};

// GET a single puppy data
const getPuppy = async (req, res) => {
    const { userId, puppyId } = req.params;

    try {
        const db = await connectMongo();

        const findPuppy = await db
            .collection(userId)
            .findOne({ type: 'puppy', _id: puppyId, active: true });

        if (!findPuppy) {
            sendResponse(res, 400, puppyInfo, 'Puppy not found');
        }

        return sendResponse(res, 200, findPuppy);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with get single puppy request'
        );
    }
};

// PUT(UPDATE) puppy data
const putPuppy = async (req, res) => {
    const { userId, puppyId } = req.params;
    const { name, birthday, gender, breed } = req.body;

    try {
        const db = await connectMongo();

        const result = await db.collection(userId).updateOne(
            { type: 'puppy', _id: puppyId, active: true },
            {
                $set: {
                    name,
                    birthday,
                    gender,
                    breed,
                    update_at: moment().format(),
                },
            }
        );

        return sendResponse(res, 200, puppyId, 'Puppy is updated');
    } catch (err) {
        sendResponse(res, 500, null, 'Error occured with update puppy request');
    }
};

// DELETE inactive puppy status
const deletePuppy = async (req, res) => {
    const { userId, puppyId } = req.params;

    try {
        const db = await connectMongo();

        const result = await db
            .collection(userId)
            .updateOne(
                { type: 'puppy', _id: puppyId, active: true },
                { $set: { active: false, update_at: moment().format() } }
            );

        return sendResponse(res, 200, puppyId, 'Puppy is deleted');
    } catch (err) {
        sendResponse(res, 500, null, 'Error occured with delete puppy request');
    }
};

// POST puppy profile picture
const addProfilePic = async (req, res) => {
    const { userId, puppyId } = req.params;
    const profilePic = req.body.data;

    try {
        // Upload file to Cloudinary
        const uploadedRes = await cloudinary.uploader.upload(profilePic, {
            upload_preset: 'puppypal',
            transformation: {
                width: 200,
                height: 200,
                crop: 'fill',
            },
            tags: ['profile', puppyId],
        });

        if (!uploadedRes) return;

        // Update profile picture url in MongoDB
        const db = await connectMongo();

        const updateData = await db.collection(userId).updateOne(
            { type: 'puppy', _id: puppyId, active: true },
            {
                $set: {
                    profilePic: uploadedRes.secure_url,
                    update_at: moment().format(),
                },
            }
        );

        return sendResponse(res, 200, uploadedRes.secure_url);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            "Error occured with update puppy's profile picture request"
        );
    }
};

// POST puppy microchip info
const addMicrochip = async (req, res) => {
    const { userId, puppyId } = req.params;

    const microchip = req.body.data;

    try {
        // Upload file to Cloudinary
        let uploadedRes;

        if (microchip.file) {
            uploadedRes = await cloudinary.uploader.upload(microchip.file, {
                upload_preset: 'puppypal',
                format: 'png',
                tags: ['microchip', puppyId],
            });

            // Post data in MongoDB
            if (!uploadedRes)
                sendResponse(res, 400, null, 'Microchip file upload fail');
        }
        const db = await connectMongo();

        const updateData = await db.collection(userId).updateOne(
            { type: 'puppy', _id: puppyId, active: true },
            {
                $set: {
                    microchip: {
                        number: microchip.number,
                        date: microchip.date,
                        place: microchip.place,
                        file: uploadedRes ? uploadedRes.secure_url : '',
                        memo: microchip.memo,
                        update_at: moment().format(),
                    },
                },
            }
        );
        assert.equal(1, updateData.modifiedCount);

        return sendResponse(res, 200, microchip);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with post microchip request'
        );
    }
};

// POST puppy pet license info
const addLicense = async (req, res) => {
    const { userId, puppyId } = req.params;

    const license = req.body.data;

    try {
        // Upload file to Cloudinary
        let uploadedRes;

        if (license.file) {
            uploadedRes = await cloudinary.uploader.upload(license.file, {
                upload_preset: 'puppypal',
                format: 'png',
                tags: ['license', puppyId],
            });

            if (!uploadedRes)
                sendResponse(res, 400, null, 'Pet license file upload fail');
        }

        // Post data in MongoDB
        const db = await connectMongo();

        const updateData = await db.collection(userId).updateOne(
            { type: 'puppy', _id: puppyId, active: true },
            {
                $set: {
                    license: {
                        number: license.number,
                        issueDate: license.issueDate,
                        expireDate: license.expireDate,
                        issueBy: license.issueBy,
                        file: uploadedRes ? uploadedRes.secure_url : '',
                        memo: license.memo,
                        update_at: moment().format(),
                    },
                },
            }
        );
        assert.equal(1, updateData.modifiedCount);

        return sendResponse(res, 200, license);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with post pet license request'
        );
    }
};

// POST puppy spay(neuter) info
const addSpay = async (req, res) => {
    const { userId, puppyId } = req.params;

    const spay = req.body.data;

    try {
        // Upload file to Cloudinary
        let uploadedRes;
        if (spay.file) {
            uploadedRes = await cloudinary.uploader.upload(spay.file, {
                upload_preset: 'puppypal',
                format: 'png',
                tags: ['spay', puppyId],
            });

            if (!uploadedRes)
                sendResponse(res, 400, null, 'Spay(Neuter) file upload fail');
        }

        // Post data in MongoDB
        const db = await connectMongo();

        const updateData = await db.collection(userId).updateOne(
            { type: 'puppy', _id: puppyId, active: true },
            {
                $set: {
                    spay: {
                        date: spay.date,
                        clinic: spay.clinic,
                        contact: spay.contact,
                        file: uploadedRes ? uploadedRes.secure_url : '',
                        memo: spay.memo,
                        update_at: moment().format(),
                    },
                },
            }
        );
        assert.equal(1, updateData.modifiedCount);

        return sendResponse(res, 200, spay);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with post spay(neuter) request'
        );
    }
};

// POST puppy insurance info
const addInsurance = async (req, res) => {
    const { userId, puppyId } = req.params;

    const insurance = req.body.data;

    try {
        // Upload file to Cloudinary
        let uploadedRes;
        if (insurance.file) {
            uploadedRes = await cloudinary.uploader.upload(insurance.file, {
                upload_preset: 'puppypal',
                format: 'png',
                tags: ['insurance', puppyId],
            });

            if (!uploadedRes)
                sendResponse(res, 400, null, 'Insurance file upload fail');
        }

        // Post data in MongoDB
        const db = await connectMongo();

        const updateData = await db.collection(userId).updateOne(
            { type: 'puppy', _id: puppyId, active: true },
            {
                $set: {
                    insurance: {
                        number: insurance.number,
                        name: insurance.name,
                        startDate: insurance.startDate,
                        endDate: insurance.endDate,
                        company: insurance.company,
                        file: uploadedRes ? uploadedRes.secure_url : '',
                        memo: insurance.memo,
                        update_at: moment().format(),
                    },
                },
            }
        );
        assert.equal(1, updateData.modifiedCount);

        return sendResponse(res, 200, insurance);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with post insurance request'
        );
    }
};

// POST puppy vet info
const addVet = async (req, res) => {
    const { userId, puppyId } = req.params;

    const vet = req.body.data;

    try {
        // Post data in MongoDB
        const db = await connectMongo();

        const updateData = await db.collection(userId).updateOne(
            { type: 'puppy', _id: puppyId, active: true },
            {
                $set: {
                    vet: {
                        name: vet.name,
                        phone: vet.phone,
                        address: vet.address,
                        web: vet.web,
                        memo: vet.memo,
                        update_at: moment().format(),
                    },
                },
            }
        );
        assert.equal(1, updateData.modifiedCount);

        return sendResponse(res, 200, vet);
    } catch (err) {
        sendResponse(res, 500, null, 'Error occured with post vet request');
    }
};

// POST puppy vaccine info
const addVaccine = async (req, res) => {
    const { userId, puppyId } = req.params;

    const vaccine = req.body.data;

    try {
        // Upload file to Cloudinary
        let uploadedRes;
        if (vaccine.file) {
            uploadedRes = await cloudinary.uploader.upload(vaccine.file, {
                upload_preset: 'puppypal',
                format: 'png',
                tags: ['vaccine', puppyId],
            });

            if (!uploadedRes)
                sendResponse(res, 400, null, 'Vaccination file upload fail');
        }

        // Post data in MongoDB
        const db = await connectMongo();

        const updateData = await db.collection(userId).insertOne({
            _id: uuidv4(),
            type: 'vaccine',
            puppyId: puppyId,
            date: vaccine.date,
            vet: vaccine.vet,
            category: vaccine.category,
            name: vaccine.name,
            file: uploadedRes ? uploadedRes.secure_url : null,
            memo: vaccine.memo,
            nextVisitDate: vaccine.nextVisitDate,
            nextVisitTime: vaccine.nextVisitTime,
            update_at: moment().format(),
        });

        return sendResponse(res, 200, vaccine);
    } catch (err) {
        sendResponse(res, 500, null, 'Error occured with post vaccine request');
    }
};

// GET pupppy all vaccine info
const getVaccine = async (req, res) => {
    const { userId, puppyId } = req.params;

    try {
        const db = await connectMongo();

        const findAllVaccine = await db
            .collection(userId)
            .find({ type: 'vaccine', puppyId: puppyId })
            .toArray();

        if (!findAllVaccine) {
            sendResponse(res, 400, puppyInfo, 'Vaccine list not found');
        }

        return sendResponse(res, 200, findAllVaccine);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with get puppy all vaccine request'
        );
    }
};

// GET pupppy single vaccine info
const getSingleVaccine = async (req, res) => {
    const { userId, puppyId, vaccineId } = req.params;

    try {
        const db = await connectMongo();

        const findVaccine = await db
            .collection(userId)
            .findOne({ type: 'vaccine', puppyId: puppyId, _id: vaccineId });

        if (!findVaccine) {
            sendResponse(res, 400, puppyInfo, 'Single vaccine not found');
        }

        return sendResponse(res, 200, findVaccine);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with get puppy single vaccine request'
        );
    }
};

//// UPDATE pupppy single vaccine info
const updateSingleVaccine = async (req, res) => {
    const { userId, puppyId, vaccineId } = req.params;
    const vaccine = req.body.data;

    try {
        // Upload file to Cloudinary
        let uploadedRes;
        if (vaccine.file) {
            uploadedRes = await cloudinary.uploader.upload(vaccine.file, {
                upload_preset: 'puppypal',
                format: 'png',
                tags: ['vaccine', puppyId],
            });

            if (!uploadedRes)
                sendResponse(res, 400, null, 'Vaccination file upload fail');
        }

        // Post data in MongoDB
        const db = await connectMongo();

        const updateVaccine = await db.collection(userId).updateOne(
            { type: 'vaccine', puppyId: puppyId, _id: vaccineId },
            {
                $set: {
                    date: vaccine.date,
                    vet: vaccine.vet,
                    category: vaccine.category,
                    name: vaccine.name,
                    file: uploadedRes ? uploadedRes.secure_url : null,
                    memo: vaccine.memo,
                    nextVisitDate: vaccine.nextVisitDate,
                    nextVisitTime: vaccine.nextVisitTime,
                    update_at: moment().format(),
                },
            }
        );

        assert.equal(1, updateVaccine.modifiedCount);

        if (!updateVaccine.modifiedCount) {
            sendResponse(res, 400, puppyInfo, 'Single vaccine update failed');
        }

        return sendResponse(res, 200, vaccine);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with update puppy single vaccine request'
        );
    }
};

// POST puppy vet record info
const addVetRecord = async (req, res) => {
    const { userId, puppyId } = req.params;

    const vetRecord = req.body.data;

    try {
        // Upload file to Cloudinary
        let uploadedRes;
        if (vetRecord.file) {
            uploadedRes = await cloudinary.uploader.upload(vetRecord.file, {
                upload_preset: 'puppypal',
                format: 'png',
                tags: ['vetRecord', puppyId],
            });

            if (!uploadedRes)
                sendResponse(res, 400, null, 'Vet record file upload fail');
        }

        // Post data in MongoDB
        const db = await connectMongo();

        const updateData = await db.collection(userId).insertOne({
            _id: uuidv4(),
            type: 'vetRecord',
            puppyId: puppyId,
            date: vetRecord.date,
            vet: vetRecord.vet,
            reason: vetRecord.reason,
            memo: vetRecord.memo,
            prescription: vetRecord.prescription,
            medication: vetRecord.medication,
            weight: vetRecord.weight,
            file: uploadedRes ? uploadedRes.secure_url : null,
            nextVisitDate: vetRecord.nextVisitDate,
            nextVisitTime: vetRecord.nextVisitTime,
            update_at: moment().format(),
        });

        return sendResponse(res, 200, vetRecord);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with post vet record request'
        );
    }
};

// GET pupppy all vet record info
const getVetRecord = async (req, res) => {
    const { userId, puppyId } = req.params;

    try {
        const db = await connectMongo();

        const findAllVetRecord = await db
            .collection(userId)
            .find({ type: 'vetRecord', puppyId: puppyId })
            .toArray();

        if (!findAllVetRecord) {
            sendResponse(res, 400, puppyInfo, 'Vet record list not found');
        }

        return sendResponse(res, 200, findAllVetRecord);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with get puppy all vet record request'
        );
    }
};

// GET pupppy single vet record info
const getSingleVetRecord = async (req, res) => {
    const { userId, puppyId, vetRecordId } = req.params;

    try {
        const db = await connectMongo();

        const findVetRecord = await db
            .collection(userId)
            .findOne({ type: 'vetRecord', puppyId: puppyId, _id: vetRecordId });

        if (!findVetRecord) {
            sendResponse(res, 400, puppyInfo, 'Single vet record not found');
        }

        return sendResponse(res, 200, findVetRecord);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with get puppy single vet record request'
        );
    }
};

// UPDATE pupppy single vaccine info
const updateSingleVetRecord = async (req, res) => {
    const { userId, puppyId, vetRecordId } = req.params;
    const vetRecord = req.body.data;

    try {
        // Upload file to Cloudinary
        let uploadedRes;
        if (vetRecord.file) {
            uploadedRes = await cloudinary.uploader.upload(vetRecord.file, {
                upload_preset: 'puppypal',
                format: 'png',
                tags: ['vetRecord', puppyId],
            });

            if (!uploadedRes)
                sendResponse(res, 400, null, 'Vet record file upload fail');
        }

        // Post data in MongoDB
        const db = await connectMongo();

        const updateVetRecord = await db.collection(userId).updateOne(
            { type: 'vetRecord', puppyId: puppyId, _id: vetRecordId },
            {
                $set: {
                    date: vetRecord.date,
                    vet: vetRecord.vet,
                    reason: vetRecord.reason,
                    memo: vetRecord.memo,
                    prescription: vetRecord.prescription,
                    medication: vetRecord.medication,
                    weight: vetRecord.weight,
                    file: uploadedRes ? uploadedRes.secure_url : null,
                    nextVisitDate: vetRecord.nextVisitDate,
                    nextVisitTime: vetRecord.nextVisitTime,
                    update_at: moment().format(),
                },
            }
        );

        assert.equal(1, updateVetRecord.modifiedCount);

        if (!updateVetRecord.modifiedCount) {
            sendResponse(
                res,
                400,
                vetRecord,
                'Single vet record update failed'
            );
        }

        return sendResponse(res, 200, vetRecord);
    } catch (err) {
        sendResponse(
            res,
            500,
            null,
            'Error occured with update puppy single vet record request'
        );
    }
};

// GET pet all holiday list
const getAllHoliday = async (req, res) => {
    const result = PET_HOLIDAY_DAYS;

    sendResponse(res, 200, result);
};

// GET pet holiday list by month
const getHolidayByMonth = async (req, res) => {
    const { month } = req.params;

    const result = PET_HOLIDAY_MONTH[month];

    sendResponse(res, 200, result);
};

// GET pet holiday list by day
const getHolidayByDay = async (req, res) => {
    const { day } = req.params;

    const result = PET_HOLIDAY_DAYS[day];

    if (!result) {
        sendResponse(res, 200, []);
        return;
    }

    sendResponse(res, 200, result);
};

module.exports = {
    addUser,
    addPuppy,
    getAllPuppy,
    getPuppy,
    putPuppy,
    deletePuppy,
    addProfilePic,
    addMicrochip,
    addLicense,
    addSpay,
    addInsurance,
    addVet,
    addVaccine,
    getVaccine,
    getSingleVaccine,
    updateSingleVaccine,
    addVetRecord,
    getVetRecord,
    getSingleVetRecord,
    updateSingleVetRecord,
    getAllHoliday,
    getHolidayByMonth,
    getHolidayByDay,
};
