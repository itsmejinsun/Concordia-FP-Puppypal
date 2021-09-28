const { MongoClient } = require('mongodb');

require('dotenv').config();

// Function that will connect MongoDB
const connectDb = async () => {
    const { MONGO_URI } = process.env;
    const options = { useNewUrlParser: true, useUnifiedTopology: true };

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db();
    return db;
};

// Function that will send response
const sendResponse = (res, status, data, message) => {
    return res.status(status).json({ status, data, message });
};

module.exports = { connectDb, sendResponse };
