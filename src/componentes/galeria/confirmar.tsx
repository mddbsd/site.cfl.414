import { useActionData } from "react-router";
import { useNavigate } from "react-router";
import type { Alumno } from "../../ts/interfaces";
import { useCurso } from "../outletEnviarDatos";
//props: todos los datos del usuario,
//en este componente va el captcha y la logica de subida a la API

/**
 * Con esta funcion me aseguro de que los datos del formulario esten llenos
 * Si el formulario esta vacio devuelve un error con status 404 y redirige
 * al componente de error
 * https://reactrouter.com/6.30.2/route/error-element
 * 
 * @returns el objeto con los datos del usuario, sino redirige al error
 */
function cargaDatos(){
    if(useActionData() === undefined){
        throw new Response("Sin datos", {status: 404})
    }
    console.log(useActionData());
    return useActionData()
}

async function validaConexionGoogle( datosGoogle: {[key: string]: string}, baseURL: string){
    const payload = new FormData()
    Object.keys(datosGoogle).forEach((key) => {
              payload.append(key, datosGoogle[key])
            })
    try {
        const res = await fetch(baseURL, {
            method: 'POST',
            body: payload,
        })
        if(res.ok){
            console.log('Subido con exito:', res);
        }else{
            console.log('Solicitud fallida:', res);  
        }
    }catch(e){
      console.error('Error durante la solicitud:', e);
    }
}

export default function Confirmar(){

    const datosUsuario: Alumno = cargaDatos()
    const datosCurso = useCurso();
    const navegar = useNavigate();
    const fecha: Date = new Date();
    //este objeto se almacena la informacion formateada para la api de google
    //El objeto necesita un formato para ser leido por el script de google, 
    //Cada atributo representa el nombre de la columna donde va a ser almacenado 
    // y necesitan un key, ambos del tipo string
    //https://bobbyhadz.com/blog/typescript-key-string-string
    const datosGoogle: {[key: string]: string} = {
        "fecha": fecha.toLocaleDateString(),
        "curso": datosCurso.trayecto,
        "horas": datosCurso.horas.toString(),
        "dias": datosCurso.dias.toString(),
        "sede": datosCurso.sede.nombre,
        "apellido": datosUsuario.apellido,
        "nombre": datosUsuario.nombre,
        "dni": datosUsuario.dni,
        "email":datosUsuario.email,
        "telefono1":datosUsuario.telefono1,
        "telefono2":datosUsuario.telefono2,
        "cuil":datosUsuario.cuil,
        "nacimiento":datosUsuario.nacimiento,
        "genero": datosUsuario.genero,
        "nacionalidad":datosUsuario.nacimiento,
        "localidad":datosUsuario.localidad,
        "direccion":datosUsuario.dir_calle + " " + datosUsuario.dir_numero + " " + (datosUsuario.dir_pisodpto != "" ? "dpto: " + datosUsuario.dir_pisodpto  : ""),
        "estudios":datosUsuario.estudios,
    }
    const APP_ID = import.meta.env.VITE_G_APP_ID
    const baseURL: string = `https://script.google.com/macros/s/${APP_ID}/exec`

    return(
        <div id="contenedor" className="bg-fondosecundario flex  justify-center ">
                                        {/*Selector de herederos directos **: */}
            <div id="tarjeta" className=" **:pb-5 bg-fondoprimario rounded-2xl h-full ">
                <div id="cabecera" className="text-center">
                    <h1 className="font-bold text-5xl text-txtterciario">¡Bienvenido al curso!</h1>
                    <p className="text-6xl text-txtprimario font-bold">{datosCurso.trayecto}</p>
                    <p>Por favor, confirme que los datos ingresados sean correctos</p>
                </div>
                <div id="datosalumno" className="grid grid-cols-3 **:mb-5 m-5">
                    <p>Nombre: <span>{datosUsuario.nombre}</span></p>
                    <p>Apellido: {datosUsuario.apellido}</p>
                    <p>DNI:{datosUsuario.dni}</p>
                    <p>CUIL:{datosUsuario.cuil}</p>
                    <p>Telefono1:{datosUsuario.telefono1}</p>
                    <p>Telefono2:{datosUsuario.telefono2}</p>
                    <p>Fecha de nacimiento:{datosUsuario.nacimiento}</p>
                    <p>Nacionalidad:{datosUsuario.nacionalidad}</p>
                    <p>Localidad:{datosUsuario.localidad}</p>
                    <p>Calle:{datosUsuario.dir_calle}</p>
                    <p>numero:{datosUsuario.dir_numero}</p>
                    <p>dpto:{datosUsuario.dir_pisodpto}</p>
                    <p>Estudios:{datosUsuario.estudios}</p>
                </div>
                <button className="bg-amber-400" onClick={() => navegar(-1)}>Volver</button>
                <button className="bg-blue-900" onClick={() => validaConexionGoogle(datosGoogle, baseURL)}>confirmar</button>
            </div> 
            
        </div>

    )
}