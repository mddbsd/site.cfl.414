interface CursoProps{
    imagen?: string
    trayecto: string
    resumen: string
    duracion: number
    mesInicio: string
    matMinima: number
    matMaxima: number
}
//iconos
import IconoTec from '../../img/iconos/icon_tec.jpg'
import { IoPeople } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import type { TarjetaCursoProps } from '../../ts/interfaces'
import TarjetaCurso from '../galeria/tarjetacurso'

function CursoDest({imagen, trayecto, resumen, duracion, mesInicio, matMaxima, matMinima}:CursoProps){
    return(
        <>
        <div className='w-full h-50'>
            <img src={imagen} className=' w-full h-full object-cover'/>
        </div>
        <div id="titulo" className='flex flex-col gap-5 items-center'>
            <div className='p-2 mb-2'>
                <h3 className='text-txtterciario font-extrabold text-lg'>{trayecto}</h3>
                <p className='text-txtprimario text-sm'>{resumen}</p>
            </div>
        </div>
        <div id="datos" className='px-5 flex flex-col gap-5 mb-4'>
            <div className='flex justify-between [&_#icono]:text-txtterciario [&_#icono]:text-2xl [&_#detalle]:flex [&_#detalle]:items-center'>
                <div id="detalle"><FaRegClock id="icono"/><span>&nbsp;{duracion}meses</span></div>
                <div id="detalle"><MdDateRange id="icono"/><span>&nbsp;{mesInicio}</span></div>
                <div id="detalle"><IoPeople id="icono"/><span>&nbsp;{matMinima}-{matMaxima}</span></div>
            </div>
        </div>
        <button className='bg-naranjacfl rounded-md mx-20'>Inscribirse</button>
        </>
    )
}

export default function Destacados(){
    //objetos representativos para la galeria de destacados, estos van a ir en un archivo json
    //cuando este todo mas completo
    const cursosDestacados = [{
        imagen: IconoTec,
        trayecto: "Programacion Web Full Stack",
        resumen: "Aprendé a desarrollar aplicaciones web modernas con las tecnologías mas demandadas del mercado. HTML, CSS,...",
        duracion: 6,
        mesInicio: "Marzo",
        matMinima: 15,
        matMaxima: 25,
    },{
        imagen: IconoTec,
        trayecto: "Programacion Web Full Stack",
        resumen: "Aprendé a desarrollar aplicaciones web modernas con las tecnologías mas demandadas del mercado. HTML, CSS,...",
        duracion: 6,
        mesInicio: "Marzo",
        matMinima: 15,
        matMaxima: 25,
    },{
        imagen: IconoTec,
        trayecto: "Programacion Web Full Stack",
        resumen: "Aprendé a desarrollar aplicaciones web modernas con las tecnologías mas demandadas del mercado. HTML, CSS,...",
        duracion: 6,
        mesInicio: "Marzo",
        matMinima: 15,
        matMaxima: 25,
    }]

    const cursosDestacados2: TarjetaCursoProps[] = [
        {
            id: 25,
            trayecto: "Manicuría",
            thumb:"estetica",
            mes:"Marzo",
            cargaHoraria: 20,
            matriculaMax:20,
            matriculaMin:15,
            localidad:"Gonzales Catan"
         
        },
                {
            id: 25,
            trayecto: "Manicuría",
            thumb:"estetica",
            mes:"Marzo",
            cargaHoraria: 20,
            matriculaMax:20,
            matriculaMin:15,
            localidad:"Gonzales Catan"
         
        },
                {
            id: 25,
            trayecto: "Manicuría",
            thumb:"estetica",
            mes:"Marzo",
            cargaHoraria: 20,
            matriculaMax:20,
            matriculaMin:15,
            localidad:"Gonzales Catan"
         
        }
    ]
    return(
        <div id="destacados" className='flex flex-col items-center pb-10'>
            <div id="texto" className="flex flex-col gap-10 text-center py-10">
                <h2 className="text-txttitularprimario text-5xl font-bold">Cursos Destacados</h2>
                <p className="text-txtprimario text-2xl">Descubrí nuestros ṕrogramas de formación profesional diseñados para las demandas del mercado actual</p>
            </div> 
            <div id="galeriadestacados" className='flex flex-wrap bp750:flex-nowrap w-full justify-between mb-8'>
                {cursosDestacados2.map((curso, key)=>(
                    <div id="cursodestacado" key={key} className='basis-1/3 shadow-xl/20 m-5 pb-2 flex flex-col rounded-2xl overflow-hidden'>
                        <TarjetaCurso {...curso} />
                        
                    </div>
                ))}
            </div>
            <button className='bg-fondosecundario hover:bg-botonhover text-white rounded-md py-5 px-10 text-center'>Ver todos los cursos</button>
        </div>
    )
}