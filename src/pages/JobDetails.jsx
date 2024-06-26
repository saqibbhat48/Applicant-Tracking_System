// src/pages/JobDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve jobs from localStorage
    const approvedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    console.log(approvedJobs);
    // Find the job by id
    const jobDetail = approvedJobs.find((job, index) => index === parseInt(id));
    setJob(jobDetail);
  }, [id]);

  const handleApply = () => {
    navigate(`/apply/${id}`); // Navigate to the application form with job id as parameter
  };

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">{job.title}</h1>
        <p className="mb-4"><strong>Location:</strong> {job.location}</p>
        <p className="mb-4"><strong>Salary:</strong> {job.salary}</p>
        <p className="mb-4"><strong>Responsibilities:</strong> {job.responsibilities}</p>
        <h3 className="text-xl font-bold mb-4">R1 Check Questions:</h3>
        <ul className="mb-4">
          {job.r1Questions && job.r1Questions.map((question, index) => (
            <li key={index} className="mb-2">
              <strong>Question {index + 1}:</strong> {question}
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-500 text-white p-4 rounded"
          onClick={handleApply}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
