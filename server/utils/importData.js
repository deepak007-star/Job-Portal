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

// const chunkSize = 1000

// const importJobs = async () => {
//     try {
//       const data = JSON.parse(fs.readFileSync('../assets/Mployee.me Task Data.json', 'utf-8'));
//       const transformedJobs = data.map((job) => {
//         const transformedJob = {
//           ...job,
//           postedDateTime: new Date(job.postedDateTime.$date),
//         };

//         if (job.jobId && typeof job.jobId === 'object' && job.jobId.$numberLong) {
//           transformedJob.jobId = Number(job.jobId.$numberLong);
//         }

//         if (job.companyImageUrl && typeof job.companyImageUrl === 'object') {
//           transformedJob.companyImageUrl = String(job.companyImageUrl['$numberDouble'] || '');
//         }
//         return transformedJob;
//       });
//       for (let i = 0; i < transformedJobs.length; i += chunkSize) {
//         const chunk = transformedJobs.slice(i, i + chunkSize);
//         await Jobs.insertMany(chunk, { ordered: false, timeout: 30000 });
//         console.log(`Inserted chunk ${i / chunkSize + 1}`);
//       }
//       process.exit();
//     } catch (error) {
//       console.error('Error importing jobs:', error.message);
//       process.exit(1);n
//     }
//   };
importJobs();
