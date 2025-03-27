
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ShavedIcePage from './pages/ShavedIcePage';

const AppRoutes: React.FC = () => {
  // Get the base URL from the public path for GitHub Pages compatibility
  const basename = window.location.pathname.includes('modern-shaved-ice-refresh') 
    ? '/modern-shaved-ice-refresh' 
    : '';

  return (
    <Routes>
      <Route path="/" element={<ShavedIcePage />} />
      <Route path="/shaved-ice" element={<ShavedIcePage />} />
      {/* Ensure GitHub Pages redirects work */}
      <Route path={`${basename}/`} element={<ShavedIcePage />} />
      <Route path={`${basename}/shaved-ice`} element={<ShavedIcePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
