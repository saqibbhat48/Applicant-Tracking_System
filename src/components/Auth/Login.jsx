// src/components/Auth/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const dummyUsers = [
      { email: 'coordinator@example.com', password: 'password', role: 'coordinator' },
      { email: 'employer@example.com', password: 'password', role: 'employer' },
      { email: 'recruiter@example.com', password: 'password', role: 'recruiter' },
      { email: 'candidate@example.com', password: 'password', role: 'candidate' },
    ];
    if (users.length === 0) {
      localStorage.setItem('users', JSON.stringify(dummyUsers));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      login(user);
      if (user.role === 'employer') {
        navigate('/jobform');
      } else if (user.role === 'coordinator') {
        navigate('/coordinator-dashboard');
      } else if (user.role === 'recruiter') {
        navigate('/recruiter-dashboard');
      } else if (user.role === 'candidate') {
        navigate(`/jobs`);
      } else {
        setError('Invalid user role');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <div className='flex justify-end p-4'><button className='text-white font-semibold bg-violet-600 px-2 py-1 rounded-md hover:bg-violet-800 duration-300 ease-linear' onClick={()=>navigate('/')}>Home</button></div>
      <div className='p-4 text-white text-lg bg-gray-600'>
        <h2 className='text-3xl font-bold'>Dummy Users</h2>
        <p><span className='text-xl font-semibold'>Coordernator ⮕ </span> email: 'coordinator@example.com', password: 'password', role: 'coordinator'</p>
       <p><span className='text-xl font-semibold'>Employer ⮕ </span>email: 'employer@example.com', password: 'password', role: 'employer'</p> 
       <p><span className='text-xl font-semibold'>Recruiter ⮕ </span>email: 'recruiter@example.com', password: 'password', role: 'recruiter'</p> 
       <p><span className='text-xl font-semibold'>Candidate ⮕ </span>email: 'candidate@example.com', password: 'password', role: 'candidate'</p>
      </div>
    <div className="flex mt-10 justify-center ">
      <form className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
