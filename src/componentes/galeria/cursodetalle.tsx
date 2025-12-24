//librerias y utilidades
import { Form } from "react-router"
import { formatHoras } from "../../ts/funciones";

//tipos/interfaces
import type { CursosJson } from "../../ts/interfaces";

//componentes<
import ImagenCurso from "../../img/imagenescursos/imagencurso";
import FormularioInscripcion from "../formularios/formularioinscripcion";
import OpenMap from "./openmap";

//iconos
import { FaRegClock } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useCurso } from "../outletEnviarDatos";
/**
 * El tipo del parametro evento es
 * React.FormEvent<HTMLFormElement>
 *  
 * 
 * @param event 
 */


export default function CursoDetalle(){
    //guardo en esta variable los datos del contexto, estan cargados con este hook personalizado
    const curso: CursosJson = useCurso();
    return(
        <div id="envcurso">
            <section id="info" className='bg-fondosecundario flex flex-col bp750:flex-row justify-center gap-4 p-3 bp750:p-15 '>
                <div id="textos" className='basis-1/2 text-txtsecundario [&>div]:border [&>div]:border-b-fondoprimario [&>div]:py-2'>
                    <h1 className='text-5xl font-extrabold'>{curso.trayecto}</h1>
                    <p className=' py-10 text-lg text-txtprimario'>{curso.descripcion}</p>
                    
                    <div id="mes" className=" text-txtterciario flex text-center gap-1 **:shrink-0 font-bold shrink-0">
                        <span className="rounded-sm px-2"><MdDateRange className="text-txtsecundario text-2xl float-right" /></span>
                        <span className="text-lg text-txtsecundario basis-1/5 bp750:basis-1/8">Inicia en</span>
                        <span className='text-lg bg-fondoprimario mx-2 px-2 rounded-sm basis-1/8'>{curso.mes}</span>
                    </div> 
                     
                    <div id="dias" className=' text-txtterciario text-center flex gap-1 font-bold shrink'>
                        <span className="rounded-sm px-2"><MdDateRange className="text-txtsecundario text-2xl float-right" /></span>
                        <span className="text-lg text-txtsecundario basis-1/5 bp750:basis-1/9">Los días </span>
                        {curso.dias.map((dia: string, key) => (<span key={key} className="text-lg bg-fondoprimario mx-2 px-2 rounded-sm basis-1/8">{dia}</span>))}
                    </div>
                    <div id="horas" className=' text-txtterciario text-center flex gap-1 font-bold shrink-0'>
                        <span className="rounded-sm px-2"><FaRegClock className="text-txtsecundario text-2xl float-right" /></span>
                        <span className="text-lg text-txtsecundario basis-1/5 bp750:basis-1/9">De </span>
                        {curso.horas.map((hr: number, key) => (<span key={key} className="text-lg bg-fondoprimario mx-2 px-2 rounded-sm basis-1/8">{formatHoras(hr)}&nbsp;{key == 0 ? <span className="text-lg text-txtsecundario">a</span> : <></>}</span>))}
                    </div>
                    <p className="text-lg text-txtprimario">Todos los cursos se dictan de manera <b>presencial.</b></p>
                </div>

                <div id="heroimagen" className='basis-1/2 w-full h-full bp750:float-right'>
                    <ImagenCurso className="h-max"/>
                </div>
            </section>
            
            <section id="geo" className="bg-fondoprimario p-5">
                <div id="direccion" className="flex flex-col gap-10 bp750:flex-row justify-center p-5 text-2xl">
                    <div id="mapa" className="w-full bp750:w-80 h-80">
                        <OpenMap coords={curso.sede.gps} localidad={curso.sede.localidad} direccion={curso.sede.direccion} />
                    </div>
                    <span>
                        <h1 className="font-bold underline underline-offset-8 text-5xl">Ubicación</h1>
                        <br/><p className="font-bold underline text-xl">Region:</p><p className="text-xl text-black">{curso.sede.localidad}</p>
                        <br/><p className="font-bold underline text-xl">Direccion:</p><p className="text-xl text-black">{curso.sede.direccion}</p>
                    </span>
                    
                </div>
            </section>
            <section id="registro" className="bg-fondosecundario flex flex-col items-center">
                <h1 className='text-5xl text-center font-extrabold text-txtsecundario my-5'>Formulario de inscripción</h1>
                <div id="envformulario" className="">                                                   {/*Llama a la accion definida en loaders.ts */}
                    <Form className="bp750:w-150 p-5 bg-fondoprimario border-0 shadow-lg sm:rounded-lg" action="confirmar" method="post">
                        <FormularioInscripcion trayecto={curso.trayecto}/>
                        <button className="ml-50 bg-botonprimario hover:bg-botonhover p-2 rounded-md text-txtsecundario" type="submit">Enviar formulario</button>
                    </Form>
                </div>  
            </section>
        </div>
    )
}