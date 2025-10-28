import apiClient from './apiClient';
import type { Producto } from '../types/producto';

export async function fetchProductos(): Promise<Producto[]> {
  console.log('[FRONTEND][SERVICE] 🟡 Enviando petición GET a /productos...');
  try {
    const response = await apiClient.get<Producto[]>('/productos');
    console.log('[FRONTEND][SERVICE] ✅ Respuesta recibida:', response.status, response.data);
    return response.data; // Axios pone los datos JSON directamente en 'data'
  } catch (error) {
    console.error('[FRONTEND][SERVICE] ❌ Error al obtener productos:', error);
    throw error; // Propaga el error para que el componente lo maneje
  }
}