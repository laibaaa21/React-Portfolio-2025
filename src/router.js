// src/router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* We'll add other routes like /education, /projects here soon */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
