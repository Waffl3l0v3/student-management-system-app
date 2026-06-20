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

## 📁 Project Structure
```text
student-management-system/
├── client/              # React frontend (Vite)
│   ├── src/             # Frontend source code
│   │   ├── components/  # React components (StudentCard, StudentForm, etc.)
│   │   ├── App.jsx      # Main application logic
│   │   └── index.css    # Premium design system styling
│   └── vite.config.js   # Vite config with API proxy
├── server/              # Node.js/Express backend
│   ├── controllers/     # Route logic (studentController.js)
│   ├── models/          # Mongoose schemas (Student.js)
│   ├── routes/          # API endpoints (studentRoutes.js)
│   ├── .env             # Environment variables (Mongo URI, Port)
│   └── server.js        # Server entry point
└── package.json         # Root orchestrator for concurrent execution
```

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

## 🚦 Running the Application

To start both the client and server concurrently, run from the root directory:
```bash
npm start
```
- **Frontend**: Runs on `http://localhost:5173/`
- **Backend API**: Runs on `http://localhost:5000/`

## 📡 API Endpoints (Backend)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/students` | Fetch all students |
| POST   | `/api/students` | Create a new student |
| PUT    | `/api/students/:id` | Update a student by ID |
| DELETE | `/api/students/:id` | Delete a student by ID |

## 🎨 Design Theme
The application utilizes a rich, dynamic "Cyberpunk / Modern Dark Mode" aesthetic:
- **Backgrounds**: Slate-colored gradients (`#0f172a`).
- **Cards**: Glassmorphism translucent effects with subtle blurs.
- **Typography**: `Inter` font from Google Fonts.
- **Interactions**: Smooth hover effects and micro-animations for buttons and cards.

---
*Created as a comprehensive demonstration of the MERN stack architecture.*
