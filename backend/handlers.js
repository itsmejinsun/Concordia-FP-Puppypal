'use strict';

const assert = require('assert');

const { connectDb, sendResponse } = require('./utils');

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

module.exports = { addUser };
