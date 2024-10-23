import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Officials from '../pages/officials';
import Calculation from '../pages/calculation';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funcionarios" element={<Officials />} />
      <Route path="/calculadora" element={<Calculation />} />
    </Routes>
  );
};

export default MainRouter;
