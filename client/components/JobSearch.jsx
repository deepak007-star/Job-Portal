import React from 'react';

const JobSearch = ({ searchLocation, setSearchLocation }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        placeholder="Search for jobs by location..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default JobSearch;
