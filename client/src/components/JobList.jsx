import React from 'react';

const JobList = ({ jobs, handleJobClick }) => {
  return (
    <div className="w-full">
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs available at the moment</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li
              key={job._id}
              className="bg-gray-100 mt-6 p-4 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer transition duration-200 hover:shadow-lg"
              onClick={() => handleJobClick(job)}
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-blue-500 ">{job.title}</h3>
                <p className="text-sm text-gray-600 font-medium truncate">{job.company}</p>
                <p className="text-sm text-gray-500 truncate">{job.location}</p>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-xs text-blue-500 font-medium">{job.employment_type}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
