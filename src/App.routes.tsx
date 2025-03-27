
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ShavedIcePage from './pages/ShavedIcePage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ShavedIcePage />} />
      <Route path="/shaved-ice" element={<ShavedIcePage />} />
      
      {/* For GitHub Pages - handle all paths to show the main content */}
      <Route path="/modern-shaved-ice-refresh" element={<ShavedIcePage />} />
      <Route path="/modern-shaved-ice-refresh/*" element={<ShavedIcePage />} />
      
      {/* Catch all remaining routes */}
      <Route path="*" element={<ShavedIcePage />} />
    </Routes>
  );
};

export default AppRoutes;
