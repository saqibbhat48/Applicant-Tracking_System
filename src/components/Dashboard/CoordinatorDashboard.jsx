// src/components/CoordinatorDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';

const CoordinatorDashboard = () => {
  const { user, logout } = useAuth();
  const { addNotification } = useNotifications();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Retrieve jobs from localStorage on component mount
    const storedJobs = JSON.parse(localStorage.getItem('jobs'));
    if (storedJobs) {
      setJobs(storedJobs);
    }
  }, []);

  const approveJob = (index) => {
    // Update the approval status of the job
    const updatedJobs = jobs.map((job, i) =>
      i === index ? { ...job, approved: true } : job
    );
    // Save the updated jobs array back to localStorage
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    // Update the state with the new jobs array
    setJobs(updatedJobs);
    // Add notification
    addNotification(`Job "${updatedJobs[index].title}" approved!`);
  };

  const handleLogout = ()=>{
    logout()
  }

  if (!user || user.role !== 'coordinator') {
    return <p>Access Denied</p>;
  }

  return (
    <div className="p-6 min-h-screen">
      <div className="bg-gray-300 p-8 rounded-lg shadow-md">
        <div className='flex justify-end'><button className='py-1 px-2 bg-slate-700 text-white rounded-md hover:bg-slate-900 duration-300 ease-linear font-semibold' onClick={handleLogout}>Logout</button></div>
        <h1 className="text-3xl font-bold mb-6">Coordinator Dashboard</h1>
        {jobs.length === 0 ? (
          <p>No job postings available for approval.</p>
        ) : (
          <ul>
            {jobs.map((job, index) => (
              <li key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-700">{job.location}</p>
                <p className="text-gray-700">Salary: {job.salary}</p>
                <p className="mt-2">{job.responsibilities}</p>
                <p className="mt-2">Approved: {job.approved ? 'Yes' : 'No'}</p>
                {!job.approved && (
                  <button
                    className="bg-green-500 text-white p-2 rounded mt-2"
                    onClick={() => approveJob(index)}
                  >
                    Approve
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CoordinatorDashboard;
