import imagen from '../../img/iconos/icon_tec.jpg'
/**
 * Simplemente genera un string aleatorio de 6 digitos, pero con la posibilidad de pasar
 * la longitud como argumento.
 * No se verifica que el string ya exista, solo lo genera, sirve para verificar el registro
 * desde la pagina
 * 
 * Primero se genera un numero con Math.random(). Se genera un numero entre 0 y 1,
 * luego se convierte el numero a un string, el argumento de la funcion es un punto base
 * le indica a la funcion que reprecente digitos mas alla del 0-9,
 * Finalmente cortamos el 0. al comienzo del numero decimal y terminar la cadena con el argumento
 * longitud con .substring(2, length+2)
 * +2 es para reemplazar los 2 primeros digitos que quitamos al comienzo
 * 
 * 
 * 
 * @param longitud cantidad de caracteres del string 
 * @returns string aleatorio
 */
function randomId(longitud: number = 6) {
  return Math.random().toString(36).substring(2, longitud + 2);
}

export default function ExitoPrueba(){
    return(
        <div>
            <div id="contenedor" className="flex flex-col items-center">
                <h1 className="font-bold text-5xl text-txtterciario text-center">CFL-414 Comprobante de inscripción</h1>
                <div id="comprobante" className='flex flex-col bp750:flex-row justify-center border border-b-blue-800'>
                    <div id="envimagen" className=" h-80 overflow-hidden">
                        <img src={imagen} className='object-cover' />
                    </div>
                    <div id="datos" className='flex flex-col rounded-2xl border p-5 border-amber-300 basis-1/2'>
                        <div id="cursoid" className='grid grid-cols-1 ustify-between p-3'>
                            <p className="text-4xl text-txtprimario font-bold">Cursonombre</p>
                            <p className='bg-botonhover text-txtprimario p-1 text-2xl font-bold text-right'>ID: {randomId(5).toUpperCase()}</p>
                            
                        </div>
                        <div className='p-3'>
                            <p>Alumno: Apellido y nombre</p>
                            <p>Fecha: dd/mm/aa</p>
                            <p>Mes de inicio: </p>
                            <p>dias de cursada: lunes martes y qseyo</p>
                            <p>horas: acavanlashoras</p>
                        </div>
                    </div>
                </div> 
                <h2>IMPORTANTE:</h2>
                <div id="botones" className=' text-txtsecundario text-center flex flex-col bp750:flex-row justify-between gap-5 font-bold '>
                    <button className="bg-red-500 p-3 rounded-lg" onClick={(e) => console.log(e)}>Volver</button>
                </div>
            </div>
        </div>
    )
}