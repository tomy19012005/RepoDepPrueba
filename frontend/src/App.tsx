import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importa tu página

function App() {
  console.log('[FRONTEND][App] 🔄 Renderizando App principal...');
  return (
    // <Router> // BrowserRouter ya está en main.tsx si usaste Vite
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Aquí podrías añadir más rutas si el proyecto crece */}
      </Routes>
    // </Router> // BrowserRouter ya está en main.tsx si usaste Vite
  );
}

export default App;