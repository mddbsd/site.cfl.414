//componentes
    /*
        Este componente Link es de react-router, crea un enlace
        con props predeterminados para facilitar el manejo de
        vinculos. el prop to= guarda las rutas
    */
import { Link } from "react-router"

//imagenes
import logoCfl from '../../img/logos/logo_cfl414t.png'
import logoMtz from '../../img/logos/logo_mtz.png'

export default function BarraNav(){
    return(
        <div id="barranav" className="flex justify-between items-center p-2 bg-stone-300">
            <div id="logocfl" className="ml-10">
                <img src={logoCfl} className="h-25 w-max max-[660px]:h-10"/>
            </div>
            <nav id="navegacion" className="align-middle text-center max-[660px]:hidden">
                <div id="botones" className="flex justify-center gap-4 [&_#boton]:w-25 [&_#boton]:rounded-md [&_#boton]:py-2 [&_#boton]:transition-color [&_#boton]:duration-300 [&_#boton]:hover:bg-orange-500">
                    <Link id="boton" to="/">Inicio</Link>
                    <Link id="boton" to="/">Cursos</Link>
                    <Link id="boton" to="/">Nosotros</Link>
                    <Link id="boton" to="/">Contacto</Link>
                </div>
            </nav>
            <div id="logomtz" className="max-[660px]:hidden">
                <img src={logoMtz} className="h-10 w-max"/>
            </div>
        </div>
    )
}