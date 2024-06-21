// src/components/Dashboard/RecruiterDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const RecruiterDashboard = () => {
  const { user, logout } = useAuth();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem('applications')) || [];
    setApplications(storedApplications);
  }, []);

  const handleShortlist = (index) => {
    const updatedApplications = [...applications];
    updatedApplications[index].shortlisted = !updatedApplications[index].shortlisted;
    setApplications(updatedApplications);
    localStorage.setItem('applications', JSON.stringify(updatedApplications));

    const updatedShortlisted = updatedApplications.filter(application => application.shortlisted);
    
    localStorage.setItem('shortlistedApplications', JSON.stringify(updatedShortlisted));
  };

  const handleLogout = ()=>{
    logout()
  }

  if (!user || user.role !== 'recruiter') {
    return <p>Access Denied</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
      <div className='flex justify-end'><button className='py-1 px-2 bg-slate-700 text-white rounded-md hover:bg-slate-900 duration-300 ease-linear font-semibold' onClick={handleLogout}>Logout</button></div>
        <h1 className="text-3xl font-bold mb-6">Recruiter Dashboard</h1>
        {applications.length === 0 ? (
          <p>No applications available.</p>
        ) : (
          <ul>
            {applications.map((application, index) => (
              <li key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h3 className="text-xl font-bold">{application.name}</h3>
                <p className="text-gray-700">{application.email}</p>
                <p className="text-gray-700">Job ID: {application.jobId}</p>
                <p className="mt-2">R1 Responses:</p>
                <ul>
                  {application.r1Responses.map((response, i) => (
                    <li key={i} className="text-gray-700">Response {i + 1}: {response}</li>
                  ))}
                </ul>
                <p className="mt-2">Resume:</p>
                {application.resume && (
                  <a
                    href={application.resume}
                    download={`${application.name}_resume`}
                    className="text-blue-500 underline"
                  >
                    Download Resume
                  </a>
                )}
                <div className='flex justify-end'>
                  <button
                    className={`p-2 rounded mt-2 ${application.shortlisted ? 'bg-gray-500 text-white' : 'bg-green-500 text-white'}`}
                    onClick={() => handleShortlist(index)}
                  >
                    {application.shortlisted ? 'Shortlisted' : 'Shortlist'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecruiterDashboard;
