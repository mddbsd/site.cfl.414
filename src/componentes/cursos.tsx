//Thumbnails
import ThumbCategoria from '../img/iconos/thumbs'

import cursosJson from '../json/cursos.json'

import type { TarjetaCursoProps } from '../ts/interfaces'

function Curso(props: TarjetaCursoProps){
    return(
        <div id="curso" className='bg-fondoterciario shadow-2xl flex flex-col justify-center rounded-2xl overflow-hidden hover:-translate-y-3 transform duration-150 shrink-0 snap-center'>
            <div className='w-full h-50 flex flex-col rounded-2xl'>
                <ThumbCategoria thumb={props.thumb} className='w-full h-full object-cover' />
            </div>
            <div className='p-5'>
                <p className='text-2xl'>{props.trayecto}</p>
                <p>{props.resumen}</p>
            </div>
            <button className='bg-botonhover mb-5 mx-5 rounded-md'>Ver detalles</button>
        </div>
    )
}

export default function Cursos(){
    //Los cursos estan en un archivo JSON, estos van a venir desde una API cuando tenga el backend

    function filtro(filtro: string){
        return cursosJson.filter(((filtrados) => {return filtrados.sede.localidad === filtro}))
    }

    return(
        <div id="cursos" className='bg-fondosecundario'>
            <h1></h1>
            <h2 className='text-txtsecundario font-extrabold text-5xl '>Lomas del Mirador</h2>
            <div id="cursosnuevos" className='flex gap-3 p-5 scroll-auto snap-x overflow-y-scroll no-scrollbar'>
                
                {filtro("Lomas del Mirador").map((curso) => (
                    <div key={curso.idCurso}><Curso id={curso.idCurso} trayecto={curso.trayecto} thumb={curso.thumb} resumen={curso.resumen} mesInicio={curso.mes} cargaHoraria={curso.cargaHoraria} localidad={curso.sede.localidad}/></div>                  
                ))}
            </div>
            <h2 className='text-txtsecundario font-extrabold text-5xl '>Gonzales Catán</h2>
            <div className='flex gap-3 p-5 scroll-auto snap-x overflow-y-scroll no-scrollbar'>
                {filtro("Gonzales Catan").map((curso) => (

                    <div key={curso.idCurso}><Curso id={curso.idCurso} trayecto={curso.trayecto} thumb={curso.thumb} resumen={curso.resumen} mesInicio={curso.mes} cargaHoraria={curso.cargaHoraria} localidad={curso.sede.localidad}/></div>  
                ))}
            </div>
        </div>
    )
}