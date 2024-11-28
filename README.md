# Book Review Application

### A full-stack web application for book enthusiasts to browse, add, edit, and delete book reviews.

---

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Installation](#installation)
   - [Frontend Setup](#frontend-setup)
   - [Backend Setup](#backend-setup)
5. [Environment Variables](#environment-variables)
   - [Frontend](#frontend)
   - [Backend](#backend)
6. [Usage](#usage)
7. [Screenshots](#screenshots)

---

## Description
The **Book Review** application provides a platform for users to share their thoughts on books they've read, including ratings and comments. Users can browse community reviews to discover new books and manage their own reviews with full CRUD functionality.

---

## Features
- **Browse Reviews**: Discover new books through community reviews.
- **Add Reviews**: Share your thoughts, ratings, and comments on books you've read.
- **Edit Reviews**: Update your reviews to reflect new opinions or insights.
- **Delete Reviews**: Remove reviews that are no longer relevant.

---

## Technology Stack
- **Frontend**: React.js, Next.js, Ant Design CSS
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)

---

## Installation

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine.
- **npm**: Package manager to handle dependencies.

---

### Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
2. Install dependencies:

 ```bash
 npm install
3. Run the frontend server:

 ```bash
npm run dev

Open your browser and go to http://localhost:3000.

### Backend Setup
1. Navigate to the backend directory:

````bash
cd backend

2. Install dependencies:

````bash
npm install

3. Run the backend server:

````bash
npm run dev
The server will run on http://localhost:8080.

Environment Variables
Frontend
Create a .env file in the frontend directory. Here’s an example:

env
Copy code
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
Note: The .env file is already added to .gitignore for security.

Backend
Create a .env file in the backend directory. Here’s an example:

````bash
PORT=8080
MONGO_URI=mongodb://localhost:27017/bookreviews
I already provided .env.example 
Important: Ensure the .env file is configured before starting the backend server.

