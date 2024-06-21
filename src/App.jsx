// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import EmployerDashboard from './components/Dashboard/EmployerDashboard';
import CoordinatorDashboard from './components/Dashboard/CoordinatorDashboard';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import PrivateRoute from './components/Auth/PrivateRoute';
import Home from './pages/Home';
import Notification from './components/Notification/Notification';
import JobForm from './components/Job/JobForm';
import JobDetails from './pages/JobDetails';
import ApplicationForm from './components/Application/ApplicationForm'; // Import ApplicationForm component
import JobList from './components/Job/JobList';
import RecruiterDashboard from './components/Dashboard/RecruiterDashboard';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="App">
            <Notification />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/employer-dashboard" element={<EmployerDashboard />} />
              <Route path="/coordinator-dashboard" element={<PrivateRoute roles={['coordinator']}><CoordinatorDashboard /></PrivateRoute>} />
              <Route path="/recruiter-dashboard" element={<PrivateRoute roles={['recruiter']}><RecruiterDashboard /></PrivateRoute>} />
              <Route path="/job/:id" element={<JobDetails />} /> 
              <Route path="/jobform" element={<PrivateRoute roles={['employer']}><JobForm /></PrivateRoute>} />
              <Route path="/apply/:id" element={<ApplicationForm />} /> 
              <Route path="/jobs" element={<PrivateRoute roles={['candidate']}><JobList/></PrivateRoute>} />
            </Routes>
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
