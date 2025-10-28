import express from 'express';
import cors from 'cors';
import productoRoutes from './routes/producto.routes'; // Importa las rutas

const app = express();
const PORT = 3000; // Puerto donde escuchará el backend

// Middlewares
app.use(cors()); // Permite peticiones desde el frontend (otro origen)
app.use(express.json()); // Permite entender JSON en el body de peticiones POST/PUT

console.log('[BACKEND][INDEX] 🚀 Iniciando servidor Express...');

// Rutas de la API
app.use('/api/productos', productoRoutes); // Usa las rutas definidas para /api/productos
console.log('[BACKEND][INDEX] ✅ Rutas API montadas en /api/productos.');

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor Backend funcionando!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`[BACKEND][INDEX] 🎉 Servidor escuchando en http://localhost:${PORT}`);
});