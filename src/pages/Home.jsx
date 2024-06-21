// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <div className="min-h-screen relative flex items-center justify-center bg-gray-100">
    <div className='p-4 bg-slate-700 max-w-96 text-white md:text-lg absolute right-4 top-4 rounded-md'><p>This project is a Applicant Tracking System that allows candidates to apply for jobs, job posting creation by employers, coordinators to approve job postings and recruiters to review, shortlist candidates and finally shortlisted candidates will appear on employer and coordinator dashboard. For more information visit my <span><button className='bg-slate-950 px-2 py-1 rounded-md'><a href="https://github.com/saqibbhat48/Applicant-Tracking_System">Github</a></button></span></p></div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Applicant Tracking System</h1>
        <Link to="/login" className="bg-blue-500 text-white p-4 rounded">
          Log In
        </Link>
        <Link to="/signup" className="bg-green-500 text-white p-4 rounded ml-4">
          Sign Up
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Home;
