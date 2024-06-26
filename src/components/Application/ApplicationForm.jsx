import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ApplicationForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState({
    name: '',
    email: '',
    resume: null,
    r1Responses: ['', '', '', '', ''],
    jobId: id,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setApplication({
          ...application,
          resume: reader.result, // Save the base64 string
        });
      };
      reader.readAsDataURL(file);
    } else {
      setApplication({
        ...application,
        [name]: value,
      });
    }
  };

  const handleR1ResponseChange = (index, value) => {
    const newResponses = [...application.r1Responses];
    newResponses[index] = value;
    setApplication({
      ...application,
      r1Responses: newResponses,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingApplications = JSON.parse(localStorage.getItem('applications')) || [];
    const updatedApplications = [...existingApplications, application];
    localStorage.setItem('applications', JSON.stringify(updatedApplications));
    alert('successfully applied')
    navigate('/jobs');
  };

  return (
    <div className="bg-white p-8 m-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Apply for Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          type="text"
          name="name"
          placeholder="Name"
          value={application.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={application.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          type="file"
          name="resume"
          onChange={handleChange}
          required
        />
        <h3 className="text-xl font-bold mb-4">R1 Check Questions</h3>
        {application.r1Responses.map((response, index) => (
          <input
            key={index}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            type="text"
            placeholder={`Response ${index + 1}`}
            value={response}
            onChange={(e) => handleR1ResponseChange(index, e.target.value)}
            required
          />
        ))}
        <button className="w-full bg-blue-500 text-white p-2 rounded">Submit Application</button>
      </form>
    </div>
  );
}

export default ApplicationForm;
