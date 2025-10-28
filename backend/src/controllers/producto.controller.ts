import { Request, Response } from 'express';
import * as productoService from '../services/producto.service';

export function getProductos(req: Request, res: Response): void {
  console.log('[BACKEND][CONTROLLER] 🟢 Petición recibida para obtener productos.');
  try {
    const productos = productoService.obtenerTodosLosProductos();
    console.log('[BACKEND][CONTROLLER] ✅ Enviando respuesta JSON con productos.');
    res.status(200).json(productos); // Envía los productos como JSON
  } catch (error) {
    console.error('[BACKEND][CONTROLLER] ❌ Error al obtener productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}