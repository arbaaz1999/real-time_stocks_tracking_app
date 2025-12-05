#!/usr/bin/env node
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;
if (!uri) {
    console.error('MONGODB_URI is not set. Set it and run:');
    console.error('\t$env:MONGODB_URI = "your_mongo_uri"; node scripts/test-db-connection.js');
    process.exit(1);
}

const opts = { bufferCommands: false, connectTimeoutMS: 10000 };

(async () => {
    try {
        const conn = await mongoose.connect(uri, opts);
        console.log('Successfully connected to MongoDB');
        await mongoose.disconnect();
        process.exit(0);
    } catch (err) {
        console.error('Failed to connect to MongoDB:');
        console.error(err);
        process.exit(2);
    }
})();
