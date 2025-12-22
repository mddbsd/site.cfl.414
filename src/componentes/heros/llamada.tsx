//iconos
import { FaUsers } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

interface ItemsLlamada{
    icono: React.ElementType
    titulo: string
    texto: string

}

function Item({icono: Icono, titulo, texto}: ItemsLlamada){
    return(
        <>
            <div id="itemicono" className="bg-fondosecundario text-txtsecundario p-2 ounded-md rounded-xl w-min">
                <Icono className="text-4xl"/>
            </div>
            <div id="itemtitulo" className="text-txttitularprimario">
                <h3 className="text-2xl">{titulo}</h3>
            </div>
            <div id="itemtexto" className="text-txtprimario">
                {texto}
            </div>
        </>
    )
}

export default function Llamada(){
    const items = [{
        icono: FaRegBookmark,
        titulo: "Certificación Oficial",
        texto: "Aprende a desarrollar aplicaciones web modernas con las tecnologías más demandadas del mercado. HTML, CSS,..."
    },{
        icono: FaUsers,
        titulo: "Grupos Reducidos",
        texto: "Clases con cupos limitados para garantizar atención personalizada y mejor aprendizaje."
    },{
        icono: FiBookOpen,
        titulo: "Material Incluido",
        texto: "Todo el material de estudio y recursos necesarios están incluidos sin costo adicional."
    },{
        icono: FaRegClock,
        titulo: "Horarios Flexibles",
        texto: "Turnos mañana, tarde y noche para que puedas estudiar según tu disponibilidad."
    },{
        icono: FiTarget,
        titulo: "Orientación Laboral",
        texto: "Preparación para el mundo del trabajo con talleres de CV, entrevistas y networking."
    },{
        icono: FiCheckCircle,
        titulo: "Prácticas Profesionales",
        texto: "Oportunidad de realizar pasantías en empresas para ganar experiencia real."
    }]

    return(
        <div id="llamada" className=" bg-fondoterciario pb-10">
            <div id="texto" className="flex flex-col gap-10 text-center py-10">
                <h2 className="text-txttitularprimario text-5xl font-bold">¿Por qué elegir CFL 414</h2>
                <p className="text-txtprimario text-2xl">Formación de calidad con todos los beneficios que necesitas para tu desarrollo profesional</p>
            </div>
            <div id="items" className="grid grid-cols-1 bp750:grid-cols-3 mx-1">
                {items.map((item, key) => (
                    <div id="item" key={key} className="bg-fondoprimario flex flex-col gap-2 p-5 m-5 rounded-xl shadow-xl/20">
                        <Item {...item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}