import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import UploadCertificate from './UploadCertificate';
import './App.css';
import logo from '../src/assets/logo2.png';

function App() {
  return (
    <Router>
      <div className="App">
      <img src={logo} alt="" />
        <header className="App-header">
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/upload" element={<UploadCertificate />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
