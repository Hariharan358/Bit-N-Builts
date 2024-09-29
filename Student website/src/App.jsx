// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login"; // Adjust the path as necessary
import Dashboard from "./components/dashboard"; // Import the Dashboard component
import Verify from "./components/verify"; // Import the Verify component
import Details from "./components/detail"; // Ensure this is correctly named 'Details'
import Image from "./assets/banner-1 (1).jpg"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/detail" element={<Details />} /> {/* Ensure 'Details' is used here */}
      </Routes>
    </Router>
  );
}

export default App;
