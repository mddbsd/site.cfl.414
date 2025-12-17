//interface
import type { TarjetaCursoProps } from "../../ts/interfaces"

//iconos
import { IoPeople } from "react-icons/io5";
//import { FaRegClock } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

//thumbs
import ThumbCategoria from '../../img/iconos/thumbs'

/*
    Desactive la carga horaria de la ficha a pedido del cliente, la dejo comentada por si quiere
    reemplazarla por otra cosa
 */
export default function TarjetaCurso(props: TarjetaCursoProps){
    return(
        <>
        <div className='w-full h-50 aspect-square'>
            <ThumbCategoria thumb={props.thumb} className="w-full h-full object-cover" />
        </div>
        <div id="titulo" className=' flex flex-col gap-5 items-center text-center'>
            <div className='p-2 mb-2'>
                <h3 className='text-txtterciario font-extrabold text-lg'>{props.trayecto}</h3>
                <p className='text-txtprimario text-sm'>{props.resumen}</p>
            </div>
        </div>
        <div id="datos" className=' px-20 flex flex-col gap-5 mb-4'>
            <div className='flex justify-between [&_#icono]:text-txtterciario [&_#icono]:text-2xl [&_#detalle]:flex [&_#detalle]:items-center'>
                {/*<div id="detalle"><FaRegClock id="icono"/><span>&nbsp;{props.cargaHoraria}horas</span></div> */}
                <div id="detalle"><MdDateRange id="icono"/><span>&nbsp;{props.mes}</span></div>
                <div id="detalle"><IoPeople id="icono"/><span>&nbsp;{props.matriculaMin}-{props.matriculaMax}</span></div>
            </div>
        </div>
        <button className='bg-botonhover rounded-md mx-20 p-3'>Inscribirse</button>
        </>
    )
}