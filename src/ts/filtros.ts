    import type { CursosJson } from "./interfaces"
    
    /**
     * Devuelve un array con los cursos filtrados por localidad
     * 
     * @param cursos lista de cursos 
     * @param filtro localidad a filtrar
     * @returns array filtrado
     */
    export function filtrarLocalidad(cursos: CursosJson[], filtro: string){
        return cursos.filter(((filtrados) => {return filtrados.sede.localidad === filtro}))
    }