import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import { Experiencia } from './Components/CV/Experiencia';
import { Contacto } from './Components/CV/Contacto';
import { Sobremi } from './Components/CV/Sobre-mi';
import { Habilidades } from './Components/CV/Habilidades';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="sobre-mi" element={<Sobremi />} />
          <Route path="habilidades" element={<Habilidades />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


