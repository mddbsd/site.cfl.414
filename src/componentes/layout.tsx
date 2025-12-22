//Componentes
import { Outlet } from "react-router"
    /*
        Outlet es un componente de react router, renderiza los componentes de las rutas hijas dentro de una ruta
        padre. Permite el anidado de rutas, permitiendo que cada componente se renderice en un layout compartido
        basado en el la URL actual.
    */
import BarraNav from "./layout/barranav"
import PieDePagina from "./layout/piedepagina"
<<<<<<< HEAD
=======
import ScrollTop from "./layout/scrollTop"
>>>>>>> imp/detallecurso

export default function Layout(){
    return(
        <>
        {/* 
            Con estas clases, overflow-hidden y su child overflow-y-scroll, puedo mantener fija la barra
            de navegación  
        */}
<<<<<<< HEAD
=======
        <ScrollTop />
>>>>>>> imp/detallecurso
        <div className="flex flex-col h-screen overflow-hidden">
            <BarraNav />
            <div id="scroll" className="overflow-y-scroll">
                <Outlet />
                <PieDePagina />
            </div>
        </div>
        </>
    )
}