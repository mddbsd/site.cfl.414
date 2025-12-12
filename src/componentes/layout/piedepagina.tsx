//iconos
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

//componentes
import { Link } from "react-router";

export default function PieDePagina(){
    return(
        <footer className="bg-black text-fondocfl p-5 flex flex-col gap-4 items-center">
            <div id="iconos" className="flex gap-12 [&_#link]:text-2xl">
                <Link id="link" to="/"><FaWhatsapp /></Link>
                <Link id="link" to="/"><FaInstagram /></Link>
                <Link id="link" to="/"><FaFacebook /></Link>
            </div>
            <div id="licelcia" className="text-xs">
                <p>©2026 CFL 414 | Todos los derechos reservados</p>
            </div>
        </footer>
    )
}