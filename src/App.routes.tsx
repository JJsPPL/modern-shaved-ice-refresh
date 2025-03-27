
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ShavedIcePage from './pages/ShavedIcePage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ShavedIcePage />} />
      <Route path="/shaved-ice" element={<ShavedIcePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
