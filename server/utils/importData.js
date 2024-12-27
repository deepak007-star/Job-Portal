const fs = require("fs");
const Jobs = require("../models/Jobs");
const mongoose = require('mongoose')
require('dotenv').config()
const connectDb = require("../config/connect");

const importJobs = async () => {
  try {
    await mongoose.connect('mongodb+srv://clashofclansid2017:Deep_2000@cluster0.qsi0vop.mongodb.net/JOB-Task?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Connected to MongoDB");
    const jsonData = JSON.parse(
      fs.readFileSync("../assets/Mployee.me Task Data.json", "utf-8")
    );
    await Jobs.insertMany(jsonData, { ordered: false, timeout: 60000 });
    console.log("Data successfully imported!");

    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

importJobs();
