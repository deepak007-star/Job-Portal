import React from 'react';

const JobDetails = ({ job }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-xl border-t-4 border-teal-500 max-w-3xl mx-auto space-y-6">
      <h3 className="text-4xl font-bold text-gray-900 mb-6">{job.title}</h3>
      <div className="space-y-5">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-teal-600">Location:</span>
          <p className="text-lg text-gray-700">{job.location}</p>
        </div>    
        
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-teal-600">Source:</span>
          <p className="text-lg text-gray-700">{job.source}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-teal-600">Experience Range:</span>
          <p className="text-lg text-gray-700">{job.experience}</p>
        </div>
      </div>
      <div className="mt-6">
        <a
          href={job.job_link}
          className="inline-block text-white bg-teal-600 hover:bg-teal-700 cursor-pointer rounded-lg px-8 py-4 text-lg font-semibold transition duration-300 shadow-lg transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default JobDetails;
