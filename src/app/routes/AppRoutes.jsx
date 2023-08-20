import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';

export default function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
