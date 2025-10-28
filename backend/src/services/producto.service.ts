import { Producto } from '../types/producto';

// ¡Datos hardcodeados aquí!
const productosSimulados: Producto[] = [
  { id: 1, nombre: 'Laptop Pro', precio: 1200 },
  { id: 2, nombre: 'Teclado Mecánico', precio: 150 },
  { id: 3, nombre: 'Monitor 4K', precio: 400 },
];

export function obtenerTodosLosProductos(): Producto[] {
  console.log('[BACKEND][SERVICE] 🟢 Obteniendo productos (hardcodeados)...');
  // En un caso real, aquí llamarías a Prisma (prisma.producto.findMany())
  console.log('[BACKEND][SERVICE] ✅ Productos encontrados:', productosSimulados.length);
  return productosSimulados;
}