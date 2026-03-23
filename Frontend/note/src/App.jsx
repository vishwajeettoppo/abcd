import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;