// db.js
const mongoose = require('mongoose');
require('dotenv').config(); 

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);

  }
};

module.exports = connectDB;
