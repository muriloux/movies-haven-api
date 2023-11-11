const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log("Connected to database");
  } catch (error) {
    console.error("Datanbase connection error:", error);
  }
};

module.exports = connectDB;
