import { Router } from 'express';
import * as productoController from '../controllers/producto.controller';

const router = Router();

// Cuando llegue un GET a /api/productos, llama al controlador getProductos
router.get('/', productoController.getProductos);

console.log('[BACKEND][ROUTES] 🛠️ Rutas de productos configuradas.');

export default router;