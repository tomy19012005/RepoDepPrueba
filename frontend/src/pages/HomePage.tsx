import React, { useState, useEffect } from 'react';
import ListaProductos from '../components/ListaProductos';
import { fetchProductos } from '../services/producto.service';
import type { Producto } from '../types/producto';

const HomePage: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('[FRONTEND][HomePage] 🚀 Montando componente y iniciando carga de datos...');
    const cargarDatos = async () => {
      try {
        setCargando(true); // Indicar que estamos cargando
        setError(null);   // Limpiar errores previos
        const datos = await fetchProductos(); // Llama al servicio del frontend
        console.log('[FRONTEND][HomePage] ✅ Datos recibidos del servicio, actualizando estado...');
        setProductos(datos);
      } catch (err) {
        console.error('[FRONTEND][HomePage] ❌ Error al cargar datos:', err);
        setError('No se pudieron cargar los productos.');
      } finally {
        console.log('[FRONTEND][HomePage] 🏁 Carga finalizada (con éxito o error).');
        setCargando(false); // Indicar que la carga terminó
      }
    };

    cargarDatos();
  }, []); // El array vacío [] asegura que esto se ejecute solo una vez al montar

  console.log('[FRONTEND][HomePage] 🔄 Renderizando página...');

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ListaProductos productos={productos} cargando={cargando} error={error} />
    </div>
  );
};

export default HomePage;