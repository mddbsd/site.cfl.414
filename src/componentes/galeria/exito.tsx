import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { useLocation } from "react-router";
import type { ComprobanteDatos } from "../../ts/interfaces";

export default function Exito(){
 //https://bobbyhadz.com/blog/typescript-expected-0-arguments-but-got-1
    const comprobanteRef = useRef<null | HTMLDivElement>(null);

    const {state} = useLocation();
    const {id, apyn, fecha, } = state;
    /**
     * Con html2canvas creamos una imagen del elemento de referencia, luego
     * jspdf lo convierte en un archivo pdf
     * https://www.npmjs.com/package/jspdf/v/1.5.2?activeTab=readme
     * https://www.npmjs.com/package/html2canvas
     */
    const descargaPdf = async () => {
        const elemento = comprobanteRef.current;
        //si el elemento esta vacio termina la ejecucion e informa por consola
        if (!elemento){
            console.log("sin elemento")
            return;
        }
        const canvas =  await html2canvas(elemento, {scale: 2})
        const imagen =  canvas.toDataURL("image/png")
        
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: "a4"
        })

        const propiedadesImagen = pdf.getImageProperties(imagen);
        const pdfW = pdf.internal.pageSize.getWidth();
        const pdfH = (propiedadesImagen.height * pdfW) / propiedadesImagen.width;
        pdf.addImage(imagen, "png", 0, 0, pdfW, pdfH);
        pdf.save("comprobante.pdf")

    }

    return(
        <div>
            <div id="contenedor" className="bg-fondosecundario flex flex-col items-center gap-5">
                <h1 className="font-bold text-5xl my-5 text-txtsecundario text-center">CFL-414 Comprobante de inscripción</h1>
                <div id="comprobante" className='flex flex-col bp750:flex-row justify-center border border-b-blue-800'>
                    <div id="envimagen" className=" h-80 overflow-hidden">
                        <img className='object-cover' />
                    </div>

                    <div id="datos" ref={comprobanteRef} className='bg-fondoprimario flex flex-col basis-1/2'>
                        <div id="cursoid" className='grid grid-cols-1 ustify-between p-3 **:mb-3'>
                            <p className="text-4xl text-txtprimario font-bold">{id}</p>
                            <p className='bg-botonhover text-txtprimario p-2 text-2xl font-bold text-right'>ID: </p>
                        </div>
                        <div id="info" className='p-3 **:mb-3'>
                            <p><b>Alumno: </b> {apyn}</p>
                            <p><b>Fecha: </b> dd/mm/aa</p>
                            <p><b>Mes de inicio: </b> marzo</p>
                            <p><b>dias de cursada: </b> lunes martes y qseyo</p>
                            <p><b>horas: </b> acavanlashoras</p>
                        </div>
                    </div>
                </div> 
                <div id="botones" className=' text-txtsecundario text-center flex justify-between gap-5 font-bold '>
                    <button className="bg-botonhover p-3 rounded-lg" onClick={()=>console.log("yay")}>Volver</button>
                    <button className="bg-botonhover p-3 rounded-lg" onClick={descargaPdf}>Guardar</button>
                </div>
                <section className="infocursos md:w-6/12 p-5">
                    <span>
                        <h3 className="text-bold text-xl">Ciclo Lectivo 2026</h3>
                        <p className="text-sm">Se pueden realizar varios cursos, siempre y cuando NO se superpongan los horarios. 
                        Por cada curso al que se desea inscribir, se debe completar un nuevo formulario. 
                        Una vez completo, el/la docente se pondrá en contacto con les estudiantes unos días antes de iniciar el curso.
                        </p>
                        <br/>
                        <ul className="text-sm list-disc">
                            <li>Los cursos son de carácter gratuito y cuentan con reconocimiento oficial.</li>
                            <li>Son llevados adelante en conjunto con el Instituto Provincial de Formación Laboral, dependiente del Ministerio de Trabajo de la Provincia de Buenos Aires.</li>
                            <li>La inscripción a los cursos está abierta al público en general.</li>
                        </ul>
                        <br/>
                        <h3 className="text-bold text-xl">Requisitos</h3>
                        <ul className="text-sm list-disc">
                            <li>SER MAYOR DE 16 AÑOS.</li>
                            <li>NIVEL PRIMARIO OBLIGATORIO.</li>
                            <li><u>Algunos cursos específicos requieren, además, el título de ESTUDIOS SECUNDARIOS COMPLETOS: Programador; Electricista De Inmuebles y Operador De Informática Para Administración Y Gestión</u></li>
                        </ul>
                        <br/>
                        <p className="text-sm">
                        Al comenzar el curso, se deberá presentar FOTOCOPIA DE DNI y CERTIFICADO DE ESTUDIOS PRIMARIOS O SECUNDARIOS.
                        </p>
                        <br/>
                        <p className="text-sm">
                        Los cursos que indican "Lista de espera" son cursos que ya alcanzaron el cupo máximo de inscriptos. Al anotarse en la lista de espera, a la persona se la llamará únicamente si se desocupa una vacante.
                        </p>
                    </span>
                </section>    
            </div>    
        </div>
    )
}
