const mongoose = require('mongoose');

// User: manoj, Password: manoj123
const mongoURI = "mongodb+srv://manoj:manoj123@cluster0.rcotcit.mongodb.net/?appName=Cluster0";

const connectDB = async() => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ Connection Failed:", err.message);
        process.exit(1);
    }
};



module.exports = connectDB;