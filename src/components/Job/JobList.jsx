// src/pages/JobList.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve approved jobs from localStorage
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const approvedJobs = storedJobs.filter(job => job.approved);
    setJobs(approvedJobs);
  }, []);

  const handleJobClick = (index) => {
    navigate(`/job/${index}`); // Navigate to job details page with job index
  };

  const handleLogout = ()=>{
    logout()
  }

  if (!user || user.role !== 'candidate') {
    return <p>Access Denied</p>;
  }

  return (
    <div className="p-6 bg-gray-300 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className='flex justify-end'><button className='py-1 px-2 bg-slate-700 text-white rounded-md hover:bg-slate-900 duration-300 ease-linear font-semibold' onClick={handleLogout}>Logout</button></div>
        <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
        {jobs.length === 0 ? (
          <p>No job postings available.</p>
        ) : (
          <ul>
            {jobs.map((job, index) => (
              <li
                key={index}
                className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer"
                onClick={() => handleJobClick(index)}
              >
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-700">{job.location}</p>
                <p className="text-gray-700">Salary: {job.salary}</p>
                <p className="mt-2">{job.responsibilities}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobList;
