'use strict';

const assert = require('assert');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

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
// 📌TODO: decide which data to send after avatar uploaded
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

const addProfilePic = async (req, res) => {
    const { userId, puppyId } = req.params;
    const profilePic = req.body.data;

    try {
        console.log('here1');
        // Upload file to Cloudinary
        const uploadedRes = await cloudinary.uploader.upload(
            profilePic,
            {
                upload_preset: 'puppypal',
                transformation: {
                    width: 200,
                    height: 200,
                    crop: 'fill',
                },
                tags: ['profile', puppyId],
            },
            function (error, result) {
                console.log(result);
            }
        );

        console.log('here2');

        // Update profile picture url in MongoDB
        if (!uploadedRes) return;

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

        console.log('here3');
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

module.exports = {
    addUser,
    addPuppy,
    getAllPuppy,
    getPuppy,
    putPuppy,
    deletePuppy,
    addProfilePic,
};
