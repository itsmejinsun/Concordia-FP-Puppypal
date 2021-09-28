'use strict';

const assert = require('assert');
const { v4: uuidv4 } = require('uuid');

const { connectDb, sendResponse, validatePuppyAdd } = require('./utils');

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
        const db = await connectDb();

        const findUser = await db.collection(sub).findOne({ sub });

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

const addPuppy = async (req, res) => {
    const { userId } = req.params;
    const puppyInfo = req.body;

    try {
        const db = await connectDb();

        const validate = validatePuppyAdd(res, puppyInfo);

        if (validate) {
            sendResponse(res, 400, puppyInfo, validate);
            return;
        }

        const insertPuppy = await db.collection(userId).insertOne({
            ...puppyInfo,
            _id: uuidv4(),
            name: puppyInfo.name.toLowerCase(),
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

module.exports = { addUser, addPuppy };
