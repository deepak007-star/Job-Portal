const express = require('express')
const app = express();
const cors = require('cors');
const connectDb = require('./config/connect');
const Jobs = require('./models/Jobs')
require('dotenv').config()


app.use(express.json());
app.use(cors())
app.get('/', (req, res)=>{
    res.send('hello exprss')
})
//  routes

app.get('/jobs', async (req, res) => {
    const limit = 10; 
    const page = 1;    
    const skip = (page - 1) * limit;
    try {
      const jobs = await Jobs.find()
        .skip(skip)
        .limit(Number(limit));
  
      const totalJobs = await Jobs.countDocuments();
  
      const totalPages = Math.ceil(totalJobs / limit);
  
      res.json({
        jobs,
        pagination: {
          totalJobs,
          totalPages,
          currentPage: page,
          limit
        }
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

app.get('/jobs/search', async (req, res) => {
  const { location } = req.query;
  try {
    const jobs = await Jobs.find({ location: new RegExp(location, 'i') });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
const port = 5000 || process.env.PORT 

app.listen(port, ()=>{
    try {
        connectDb()
        console.log(`working on ${port}`);
    } catch (error) {
        console.log(`failed to connect ${error.message}`)
    }
})