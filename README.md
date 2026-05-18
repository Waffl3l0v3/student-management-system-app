# 🎓 MERN Student Management System

A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) to manage student records efficiently. It features a modern, premium UI with glassmorphism design, smooth micro-animations, and a fully functional REST API.

## ✨ Features
- **Student CRUD Operations**: Add, view, update, and delete student records.
- **Modern UI/UX**: Premium dark-mode design with neon accents and responsive grid layout.
- **Real-Time Feedback**: Form validation and toast alerts for success/error states.
- **RESTful API**: Node.js/Express backend strictly following REST architecture.
- **Database**: MongoDB for persistent data storage using Mongoose schemas.
- **Zero-Config Workflow**: Use a single command to concurrently start both the frontend and backend.

## 🚀 Tech Stack
- **Frontend**: React, Vite, Lucide React (Icons), Axios, Custom Vanilla CSS.
- **Backend**: Node.js, Express.js, Mongoose, CORS, dotenv.
- **Database**: MongoDB.


## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Waffl3l0v3/student-management-system-app.git
   cd student-management-system-app
   ```

2. **Install all dependencies**:
   Installs root, server, and client dependencies automatically.
   ```bash
   npm run install-all
   ```

3. **Configure Environment Variables**:
   In the `server/` directory, ensure you have a `.env` file with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
