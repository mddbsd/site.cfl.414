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

function CursoDest({imagen, trayecto, resumen, duracion, mesInicio, matMaxima, matMinima}:CursoProps){
    return(
        <>
        <div className=''>
            <img src={imagen} className='w-max'/>
            <div className='p-5'>
                <h3 className='font-extrabold text-lg'>{trayecto}</h3>
                <p className='text-sm text-justify'>{resumen}</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <span><FaRegClock />{duracion} meses</span>
            <span><MdDateRange />{mesInicio}</span>
            <span><IoPeople />{matMinima}-{matMaxima}</span>
        </div>
        <button className='bg-naranjacfl rounded-2xl w-3/4 py-1'>Inscribirse</button>
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
    return(
        <div id="destacados">
            <div id="texto" className="flex flex-col gap-10 text-center py-10">
                <h2 className="text-azulcfl text-5xl font-bold">Cursos Destacados</h2>
                <p className="text-gray-600 text-2xl">Descubrí nuestros ṕrogramas de formación profesional diseñados para las demandas del mercado actual</p>
            </div> 
            <div id="galeriadestacados" className='flex justify-between'>
                {cursosDestacados.map((curso, key)=>(
                    <div id="cursodestacado" key={key} className='text-azulcfl shadow-xl/20 m-5 pb-2 flex flex-col items-center rounded-2xl overflow-hidden'>
                        <CursoDest {...curso} />
                    </div>
                ))}
            </div>
        </div>
    )
}