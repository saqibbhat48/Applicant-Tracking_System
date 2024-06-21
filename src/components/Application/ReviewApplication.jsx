// src/components/Application/ReviewApplication.jsx
import React, { useState } from 'react';

function ReviewApplication() {
  const [r2Responses, setR2Responses] = useState([null, null, null, null, null]);

  const handleR2ResponseChange = (index, value) => {
    const newResponses = [...r2Responses];
    newResponses[index] = value;
    setR2Responses(newResponses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit R2 responses and shortlist the candidate
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Review Application</h2>
      <form onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold mb-4">R2 Check Questions</h3>
        {r2Responses.map((response, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">{`Question ${index + 1}`}</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={response}
              onChange={(e) => handleR2ResponseChange(index, e.target.value)}
            >
              <option value="">Select response</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        ))}
        <button className="w-full bg-blue-500 text-white p-2 rounded">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewApplication;
