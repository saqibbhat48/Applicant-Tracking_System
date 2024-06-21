// src/components/Auth/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    if (users.find((user) => user.email === email)) {
      alert('Email already in use.');
      return;
    }

    // Add new user to users array
    const newUser = { name, email, password, role: 'candidate' };
    users.push(newUser);

    // Save updated users array back to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div>
      <div className='flex justify-end p-4'><button className='text-white font-semibold bg-violet-600 px-2 py-1 rounded-md hover:bg-violet-800 duration-300 ease-linear' onClick={()=>navigate('/')}>Home</button></div>
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
