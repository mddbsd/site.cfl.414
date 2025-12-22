import { useEffect } from 'react';
import { useLocation } from 'react-router';
/**
 * Esto no esta funcionando todavia, deberia subir la pagina al cambiar la ruta
 * @returns 
 */
export default function ScrollTop() {
  // Con useLocation obtenemos el objeto que contiene la ubicacion actual
  const { pathname } = useLocation();
 
  // Se activa cuando se cambia la ruta
  useEffect(() => {
    // Scroll hacia arriba de la pantalla
    window.scrollTo(0, 0);
    console.log("scrolltop todavia no funciona");
  }, [pathname]); // vuelve a ejecutar la funcion cuando haya cambios en la ruta
 
  return null; // este componente no renderiza nada
};
 
