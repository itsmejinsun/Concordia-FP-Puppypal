const { MongoClient } = require('mongodb');

require('dotenv').config();

// Function that will connect MongoDB
const connectMongo = async () => {
    const { MONGO_URI } = process.env;
    const options = { useNewUrlParser: true, useUnifiedTopology: true };

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db();
    return db;
};

// Variables that will connect Cloudinary
const cloudinary = require('cloudinary').v2;

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
    process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
});

// Function that will send response
const sendResponse = (res, status, data, message) => {
    return res.status(status).json({ status, data, message });
};

// Function that will check if puppy info to register is validated
const validatePuppyAdd = (res, puppyInfo) => {
    const { name, birthday, gender, breed } = puppyInfo;

    if (!name || !birthday || !gender || !breed) {
        return 'Info is missing';
    }

    return;
};

module.exports = { connectMongo, cloudinary, sendResponse, validatePuppyAdd };
