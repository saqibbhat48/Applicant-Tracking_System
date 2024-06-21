# Applicant Tracking System

## Overview

This project is a Applicant Tracking System that allows candidates to apply for jobs, job posting creation by employers, coordinators to approve job postings and recruiters to review, shortlist candidates and finally shortlisted candidates will appear on employer and coordinator dashboard. The application includes functionalities for user authentication, job postings, application submission, and notifications.

## Features

- User Authentication (Login and Signup)
- Job Posting Creation by Employers
- Job Application Submission by Candidates
- Recruiter Dashboard to Review and Shortlist Applications
- Coordinator Dashboard to Approve Job Postings
- Notifications for Job Approval

## Technologies Used

- React.js
- React Router
- Context API for State Management
- Tailwind CSS for Styling
- Local Storage for Data Persistence


## Components

### Auth Components

- **Login.jsx**: Handles user login functionality.
- **Signup.jsx**: Allows candidates to create a new account.

### Dashboard Components

- **CoordinatorDashboard.jsx**: Allows coordinators to approve job postings and notifies them upon approval.
- **RecruiterDashboard.jsx**: Allows recruiters to review applications and shortlist candidates.

### Job Components

- **JobForm.jsx**: Allows employers to create job postings.
- **JobDetails.jsx**: Displays details of a specific job and allows candidates to apply.

### Application Components

- **ApplicationForm.jsx**: Allows candidates to submit job applications.

### Notification Components

- **Notification.jsx**: Displays notifications to the user.

### Context Providers

- **AuthContext.jsx**: Manages user authentication state.
- **NotificationContext.jsx**: Manages notification state.

## Usage

### Sign Up as a Candidate:

1. Go to the Signup page and create a new account as candidate.

### Login:

1. Login as a candidate, employer, recruiter, or coordinator using the provided dummy credentials.

### Job Posting (Employer):

1. Employers can create job postings through the Job Form.

### Job Approval (Coordinator):

1. Coordinators can approve job postings in the Coordinator Dashboard.

### Job Application (Candidate):

1. Candidates can view job details and submit applications.

### Review Applications (Recruiter):

1. Recruiters can review and shortlist applications in the Recruiter Dashboard.

## Dummy Credentials

Use the following dummy credentials to login as different user roles:

### Coordinator:

- **Email**: coordinator@example.com
- **Password**: password

### Employer:

- **Email**: employer@example.com
- **Password**: password

### Recruiter:

- **Email**: recruiter@example.com
- **Password**: password

### Candidate:

- **Email**: candidate@example.com
- **Password**: password

