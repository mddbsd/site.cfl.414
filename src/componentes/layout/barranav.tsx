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

//iconos
import { LuMenu } from "react-icons/lu";

export default function BarraNav(){
    return(
        <div id="barranav" className="flex justify-between items-center p-2">
            <div id="logocfl" className="flex items-center ml-5 bp750:ml-10">
                <img src={logoCfl} className="h-12 bp750:h-25 w-max "/>
                <span className="bp750:hidden font-black text-2xl">CFL-414</span>
            </div>
            <nav id="navegacion" className="align-middle text-center hidden bp750:block">
                <div id="botones" className="flex justify-center gap-4 [&_#boton]:hover:bg-botonhover [&_#boton]:w-25 [&_#boton]:rounded-md [&_#boton]:py-2 [&_#boton]:transition-color [&_#boton]:duration-300">
                    <Link id="boton" to="/">Inicio</Link>
                    <Link id="boton" to="/">Cursos</Link>
                    <Link id="boton" to="/">Nosotros</Link>
                    <Link id="boton" to="/">Contacto</Link>
                </div>
            </nav>
            <div id="logomtz" className="hidden bp750:block">
                <img src={logoMtz} className="h-10 w-max"/>
            </div>
            <div id="botonmenu" className="text-txtterciario bp750:hidden text-3xl">
                <LuMenu />
            </div>

        </div>
    )
}