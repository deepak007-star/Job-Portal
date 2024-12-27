const mongoose = require("mongoose");



const jobSchema = new mongoose.Schema({
  jobId: Number,
  title: String,
  company: String,
  location: String,
  jobLink: String,
  employmentType: String,
  experience: String,
  source: String,
  country: String,
  postedDateTime: Object,
  companyImageUrl: Object,
  minExp: Number,
  maxExp: Number,
});


jobSchema.index({location:1})
const Jobs = mongoose.model("Jobs", jobSchema);
module.exports = Jobs;
