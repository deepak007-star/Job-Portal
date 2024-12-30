import React, { useState, useEffect } from "react";
import axios from "axios";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import JobSearch from "./components/JobSearch";
const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  
  const handleJobClick = (job) => {
    setSelectedJob(job);
  };  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center justify-center w-full ">
        <JobSearch
          searchLocation={searchLocation}
          setSearchLocation={setSearchLocation}
        />
      </div>
      <div className="flex space-x-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col w-2/5 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Available Job Listings
          </h2>
          <JobList searchLocation={searchLocation} handleJobClick={handleJobClick} currentPage={currentPage} setTotalPages={setTotalPages} />
          <div className="mt-4 flex items-center justify-between p-2">
            <button className="px-4 py-2 bg-blue-200 text-blue-700 hover:bg-blue-400 hover:text-white transition-all cursor-pointer rounded-full"
            onClick={()=>currentPage===1?'':setCurrentPage(currentPage-1)}>
            ← Previous
            </button>
            <div className="font-semibold text-gray-500">
              {currentPage} of {totalPages}
            </div>
            <button className="px-4 py-2 bg-blue-200 text-blue-700 hover:bg-blue-400 hover:text-white cursor-pointer rounded-full transition-all"
            onClick={()=>currentPage===totalPages-1?'':setCurrentPage(currentPage+1)}>
            Next →
            </button>
          </div>
        </div>
        <div className="flex-1 w-3/5 bg-white p-6 rounded-lg shadow-lg">
          {selectedJob ? (
            <JobDetails job={selectedJob} />
          ) : (
            <p className="text-gray-500">Select a job to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
