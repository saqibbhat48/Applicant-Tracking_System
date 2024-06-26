
// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [show, setShow] = useState(false)


  return (
    <div>
      <div className='bg-gray-100 p-10'>
        <button className='bg-green-500 hover:bg-green-600 duration-300 ease-linear px-2 py-1 rounded-md text-white' onClick={()=>setShow(!show)}>About Project ↴</button>
        <div>{
        show && <div className='p-4 bg-slate-700 text-white md:text-lg rounded-md'><p>This project is a Applicant Tracking System that allows candidates to apply for jobs, job posting creation by employers, coordinators to approve job postings and recruiters to review, shortlist candidates and finally shortlisted candidates will appear on employer and coordinator dashboard. For more information visit my <span><button className='bg-slate-950 px-2 py-1 rounded-md'><a href="https://github.com/saqibbhat48/Applicant-Tracking_System" target='_main'>Github</a></button></span></p></div>
      }</div>
    </div>
    <div className=" relative flex justify-center items-center bg-gray-100 h-56">
    
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

