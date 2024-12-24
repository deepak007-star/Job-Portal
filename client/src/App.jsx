import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from '../components/JobList';
import JobDetails from '../components/JobDetails';
import JobSearch from '../components/JobSearch';
const App = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (searchLocation) {
      const fetchFilteredJobs = async () => {
        try {
          const response = await axios.get('http://localhost:5000/jobs/search', {
            params: { location: searchLocation },
          });
          setJobs(response.data);
        } catch (error) {
          console.error('Error fetching filtered jobs:', error);
        }
      };
      fetchFilteredJobs();
    }
  }, [searchLocation]);

  // Handle job selection
  const handleJobClick = (job) => {
    setSelectedJob(job);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className='flex items-center justify-center w-full'>
          <JobSearch searchLocation={searchLocation} setSearchLocation={setSearchLocation} />
      </div>
      <div className="flex space-x-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col w-2/5 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Available Job Listings</h2>
          <JobList jobs={jobs} handleJobClick={handleJobClick} />
        </div>
        <div className="flex-1 w-3/5 bg-white p-6 rounded-lg shadow-lg">
          {selectedJob ? <JobDetails job={selectedJob} /> : <p className="text-gray-500">Select a job to view details</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
