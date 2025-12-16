//datos cursos
import cursosJson from '../json/cursos.json'

//componentes
import TarjetaCurso from './galeria/tarjetacurso'

//interfaces

export default function Cursos(){
    //Los cursos estan en un archivo JSON, estos van a venir desde una API cuando tenga el backend

    function filtro(filtro: string){
        return cursosJson.filter(((filtrados) => {return filtrados.sede.localidad === filtro}))
    }

    return(
        <div id="cursos" className='bg-fondosecundario py-5'>
            <h1 className='text-txtsecundario text-center text-6xl font-extrabold'>Cursos 2026</h1>
            <h2 className='text-txtsecundario text-center bp750:text-left font-extrabold text-4xl ml-5'>Lomas del Mirador</h2>
            <div id="galeriacursos" className='grid auto-cols-max grid-flow-col mb-8 snap-x overflow-y-scroll no-scrollbar'> {/*flex gap-3 p-5 scroll-auto snap-x overflow-y-scroll no-scrollbar */}
                {filtro("Lomas del Mirador").map((curso) => (
                    <div id="curso" key={curso.idCurso} className='bg-fondoprimario shadow-xl/20 m-5 pb-2 flex flex-col rounded-2xl overflow-hidden shrink-0 snap-center w-100'>
                        <TarjetaCurso id={curso.idCurso} trayecto={curso.trayecto} thumb={curso.thumb} resumen={curso.resumen} mes={curso.mes} cargaHoraria={curso.cargaHoraria} localidad={curso.sede.localidad} matriculaMax={curso.matriculaMax} matriculaMin={curso.matriculaMin}/>
                    </div>                  
                ))}
            </div>
            <h2 className='text-txtsecundario text-center bp750:text-left font-extrabold text-4xl ml-5'>Gonzales Catan</h2>
            <div id="galeriacursos" className='grid auto-cols-max grid-flow-col mb-8 snap-x overflow-y-scroll no-scrollbar'> {/*flex gap-3 p-5 scroll-auto snap-x overflow-y-scroll no-scrollbar */}
                {filtro("Gonzales Catan").map((curso) => (
                    <div id="curso" key={curso.idCurso} className='bg-fondoprimario shadow-xl/20 m-5 pb-2 flex flex-col rounded-2xl overflow-hidden shrink-0 snap-center w-100'>
                        <TarjetaCurso id={curso.idCurso} trayecto={curso.trayecto} thumb={curso.thumb} resumen={curso.resumen} mes={curso.mes} cargaHoraria={curso.cargaHoraria} localidad={curso.sede.localidad} matriculaMax={curso.matriculaMax} matriculaMin={curso.matriculaMin}/>
                    </div>                  
                ))}
            </div>
            <h2 className='text-txtsecundario text-center bp750:text-left font-extrabold text-4xl ml-5'>Gregorio de Laferrere</h2>
            <div id="galeriacursos" className='grid auto-cols-max grid-flow-col mb-8 snap-x overflow-y-scroll no-scrollbar'> {/*flex gap-3 p-5 scroll-auto snap-x overflow-y-scroll no-scrollbar */}
                {filtro("Laferrere").map((curso) => (
                    <div id="curso" key={curso.idCurso} className='bg-fondoprimario shadow-xl/20 m-5 pb-2 flex flex-col rounded-2xl overflow-hidden shrink-0 snap-center w-100'>
                        <TarjetaCurso id={curso.idCurso} trayecto={curso.trayecto} thumb={curso.thumb} resumen={curso.resumen} mes={curso.mes} cargaHoraria={curso.cargaHoraria} localidad={curso.sede.localidad} matriculaMax={curso.matriculaMax} matriculaMin={curso.matriculaMin}/>
                    </div>                  
                ))}
            </div>
            <h2 className='text-txtsecundario text-center bp750:text-left font-extrabold text-4xl ml-5'>San Justo</h2>
            <div id="galeriacursos" className='grid auto-cols-max grid-flow-col mb-8 snap-x overflow-y-scroll no-scrollbar'> {/*flex gap-3 p-5 scroll-auto snap-x overflow-y-scroll no-scrollbar */}
                {filtro("San Justo").map((curso) => (
                    <div id="curso" key={curso.idCurso} className='bg-fondoprimario shadow-xl/20 m-5 pb-2 flex flex-col rounded-2xl overflow-hidden shrink-0 snap-center w-100'>
                        <TarjetaCurso id={curso.idCurso} trayecto={curso.trayecto} thumb={curso.thumb} resumen={curso.resumen} mes={curso.mes} cargaHoraria={curso.cargaHoraria} localidad={curso.sede.localidad} matriculaMax={curso.matriculaMax} matriculaMin={curso.matriculaMin}/>
                    </div>                  
                ))}
            </div>
            <h2 className='text-txtsecundario text-center bp750:text-left font-extrabold text-4xl ml-5'>La Tablada</h2>
            <div id="galeriacursos" className='grid auto-cols-max grid-flow-col mb-8 snap-x overflow-y-scroll no-scrollbar'> {/*flex gap-3 p-5 scroll-auto snap-x overflow-y-scroll no-scrollbar */}
                {filtro("La Tablada").map((curso) => (
                    <div id="curso" key={curso.idCurso} className='bg-fondoprimario shadow-xl/20 m-5 pb-2 flex flex-col rounded-2xl overflow-hidden shrink-0 snap-center w-100'>
                        <TarjetaCurso id={curso.idCurso} trayecto={curso.trayecto} thumb={curso.thumb} resumen={curso.resumen} mes={curso.mes} cargaHoraria={curso.cargaHoraria} localidad={curso.sede.localidad} matriculaMax={curso.matriculaMax} matriculaMin={curso.matriculaMin}/>
                    </div>                  
                ))}
            </div>
            
        </div>
    )
}