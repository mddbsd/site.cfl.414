import { Outlet, useLoaderData,useOutletContext } from "react-router";
import type { CursosJson } from "../ts/interfaces";

/**
 * Hook personalizado para acceder al valor del contenido.
 * https://reactrouter.com/api/hooks/useOutletContext
 * @returns  
 */
export function useCurso() {
  return useOutletContext<CursosJson>();
}

/**
 * Con este componente puedo crear un outlet y enviar datos
 * como contexto a todas las rutas que se van a renderizar en ese outlet
 * @returns outlet con el objeto curso como contexto
 */
export default function OutletEnviarDatos(){
    const curso: CursosJson = useLoaderData();
    return(
        <Outlet context={ curso satisfies CursosJson}/>
    )
}