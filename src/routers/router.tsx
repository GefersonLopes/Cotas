import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Company from '../pages/company';
import Officials from '../pages/officials';
import Calculation from '../pages/calculation';
import GetOfficials from '../pages/findOfficials';
import GetCalculateQuotas from '../pages/findCalculateQuotas';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/empresas" element={<Company />} />
      <Route path="/funcionarios" element={<Officials />} />
      <Route path="/funcionarios/:empresa_id" element={<GetOfficials />} />
      <Route path="/" element={<Calculation />} />
      <Route path="/calculadora/:empresa_id" element={<GetCalculateQuotas />} />
    </Routes>
  );
};

export default MainRouter;
