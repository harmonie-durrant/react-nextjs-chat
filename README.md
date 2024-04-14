# MyTodo
MyTodo is a TODO list application with a backend built using Node.js and MySQL database. It provides an API to manage users and their tasks. The goal of the project was to introduce us to the web by making an API. As a bonus we could make a simple front end login page.

## Prerequisites
Make sure you have the following installed:
- Node.js (tested on version 20.10.0)
- npm (tested on version 10.2.3)

## Installation
1. Clone the repository:
```bash copy
git clone <repository-url>
```
2. Install dependencies:
```bash
cd frontend
npm install
cd ../backend
npm install
```
3. Set up the environment variables:
rename `.env.example` to `.env` file for the frontend and the backend replacing between the "<>" with your own secret and projectID (log into <a href="https://chatengine.io/">chatengine.io</a> and create a project to show the info you need)
```

5. Start the backend:
```bash
cd backend
npm run start
```

6. Start the front-end:
```bash
cd frontend
npm run dev
```

The site will be available at http://localhost:3000

### Technologies Used

#### Backend
- Node.js
- Express.js
- cors
- axios

#### Frontend
- vite
- react
- axios
- react-chat-engine-pretty