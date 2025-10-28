import React from 'react';
import type { Producto } from '../types/producto';

interface ListaProductosProps {
  productos: Producto[];
  cargando: boolean;
  error: string | null;
}

const ListaProductos: React.FC<ListaProductosProps> = ({ productos, cargando, error }) => {
  console.log('[FRONTEND][ListaProductos] 🔄 Renderizando...');

  if (cargando) {
    console.log('[FRONTEND][ListaProductos] ⏳ Mostrando estado de carga.');
    return <p>Cargando productos...</p>;
  }

  if (error) {
    console.log('[FRONTEND][ListaProductos] ❗ Mostrando error:', error);
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (productos.length === 0) {
    console.log('[FRONTEND][ListaProductos] 🤷 No hay productos para mostrar.');
    return <p>No hay productos disponibles.</p>;
  }

  console.log('[FRONTEND][ListaProductos] ✨ Mostrando lista de productos:', productos.length);
  return (
    <ul>
      {productos.map((prod) => (
        <li key={prod.id}>
          {prod.nombre} - ${prod.precio}
        </li>
      ))}
    </ul>
  );
};

export default ListaProductos;