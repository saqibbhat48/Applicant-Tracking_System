// src/components/Dashboard/EmployerDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployerDashboard = () => {
  const [shortlistedApplications, setShortlistedApplications] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    // Retrieve shortlisted applications from localStorage
    const storedShortlisted = JSON.parse(localStorage.getItem('shortlistedApplications')) || [];
    setShortlistedApplications(storedShortlisted);
  }, []);

  const handleClick = ()=>{
    navigate('/jobform')
  }

  return (
    <div className="p-6 min-h-screen">
      <div className="bg-gray-300 p-8 rounded-lg shadow-md">
        <div className='flex justify-between'><h1 className="text-3xl font-bold mb-10">Employer Dashboard</h1><div><button onClick={handleClick} className='bg-purple-500  px-2 py-1 rounded-md text-white'>Add Jobs</button></div></div>
      
      
        <h2 className="text-3xl font-bold mb-4">Shortlisted Candidates :</h2>
        {shortlistedApplications.length === 0 ? (
          <p>No shortlisted applications available.</p>
        ) : (
          <div>
            {shortlistedApplications.map((application, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerDashboard;
