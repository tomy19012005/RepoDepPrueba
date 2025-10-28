import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importante para las rutas
import App from './App.tsx';
// import './index.css' // Puedes importar estilos globales aquí

console.log('[FRONTEND][main] 🚀 Iniciando aplicación React...');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envuelve tu App con BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);