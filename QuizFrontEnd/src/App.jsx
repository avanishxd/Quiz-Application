import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LearningSection from "./components/LearningSection";
import Quiz from "./components/Quiz";
import AdminDashboard from "./components/AdminDashboard"; 
import Login from "./components/Login"; 
import Homepage from './components/homepage';

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  if (!userRole) {
    // If not logged in, show Login page
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <Navbar userRole={userRole} onLogout={handleLogout} />
      <Routes>
        {userRole === "USER" && (
          <>
            <Route path="/learning" element={<LearningSection />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<Navigate to="/learning" />} />
          </>
        )}
        {userRole === "ADMIN" && (
          <>
            <Route path="/admin" element={<Homepage />} />
            <Route path="*" element={<Navigate to="/admin" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
