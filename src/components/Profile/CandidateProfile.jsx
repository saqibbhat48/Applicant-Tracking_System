// src/components/Profile/CandidateProfile.js
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const CandidateProfile = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'candidate') {
    return <p>Access Denied</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Candidate Profile</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Contact Information:</strong> {user.contactInfo}</p>
        <p><strong>Resume:</strong> {user.resume}</p>
      </div>
    </div>
  );
};

export default CandidateProfile;
