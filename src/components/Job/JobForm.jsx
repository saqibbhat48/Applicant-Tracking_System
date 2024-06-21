// src/components/Job/JobForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function JobForm() {
  const navigate = useNavigate();
  const {logout} = useAuth()
  const [job, setJob] = useState({
    title: '',
    location: '',
    salary: '',
    responsibilities: '',
    r1Questions: ['', '', '', '', ''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({
      ...job,
      [name]: value,
    });
  };

  const handleR1QuestionChange = (index, value) => {
    const newQuestions = [...job.r1Questions];
    newQuestions[index] = value;
    setJob({
      ...job,
      r1Questions: newQuestions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const updatedJobs = [...storedJobs, job];
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    alert('Job posted successfully')
    setJob({
      title: '',
      location: '',
      salary: '',
      responsibilities: '',
      r1Questions: ['', '', '', '', ''],
    });
  };

  const handleLogout = ()=>{
    logout()
  }

  const dashboard = ()=>{
    navigate('/employer-dashboard')
  }


  return (
    
    <div className="bg-gray-300 m-10 p-8 rounded-lg shadow-md">
      <div className='flex gap-6 justify-end'> <button onClick={dashboard} className='bg-green-600 px-2 py-1 rounded-md text-white hover:bg-green-800 duration-300 ease-linear'>Dashboard</button> <button className='py-1 px-2 bg-slate-700 text-white rounded-md hover:bg-slate-900 duration-300 ease-linear font-semibold' onClick={handleLogout}>Logout</button></div>
      <h2 className="text-2xl font-bold mb-6">Create Job Posting</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
        />
        <input
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
        />
        <input
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          type="text"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />
        <textarea
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          name="responsibilities"
          placeholder="Responsibilities"
          value={job.responsibilities}
          onChange={handleChange}
        />
        <h3 className="text-xl font-bold mb-4">R1 Check Questions</h3>
        {job.r1Questions.map((question, index) => (
          <input
            key={index}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            type="text"
            placeholder={`Question ${index + 1}`}
            value={question}
            onChange={(e) => handleR1QuestionChange(index, e.target.value)}
          />
        ))}
        <button className="w-full bg-blue-500 text-white p-2 rounded">Submit Job</button>
      </form>
    </div>
    
  );
}

export default JobForm;
