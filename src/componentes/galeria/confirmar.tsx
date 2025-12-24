import { useActionData } from "react-router";
import { useNavigate } from "react-router";
import type { Alumno, ComprobanteDatos } from "../../ts/interfaces";
import { Link } from "react-router";
import { useCurso } from "../outletEnviarDatos";
import { randomId } from "../../ts/funciones";
import { useState } from "react";
//props: todos los datos del usuario,
//en este componente va el captcha y la logica de subida a la API

/**
 * Con esta funcion me aseguro de que el formulario tenga datos.
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
    return useActionData()
}


export default function Confirmar(){
    const [estaCargando, setEstaCargando]= useState(false)
    const datosUsuario: Alumno = cargaDatos()
    const datosCurso = useCurso();
    const navegar = useNavigate();
    const fecha: Date = new Date();
    const id = randomId();

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
        "id":id,
    }
    const APP_ID = import.meta.env.VITE_G_APP_ID
    const baseURL: string = `https://script.google.com/macros/s/${APP_ID}/exec`

    /**
 * Recibe los datos formateados y la url con la key de google
 * los datos se suben en formato Formulario, armamos el payload con el objeto datosGoogle
 * luego se llama a la api con baseUrl y el payload como cuerpo
 * 
 * @param datosGoogle datos formateados
 * @param baseURL url con la key de google
 */

async function validaConexionGoogle( datosGoogle: {[key: string]: string}, baseURL: string){
    setEstaCargando(true);
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
            return navegar("/exito", {state: {        
                id: id,  
                apyn:datosUsuario.nombre + " " + datosUsuario.apellido, 
                fecha: fecha, 
                trayecto: datosCurso.trayecto, 
                mes: datosCurso.mes, dias:datosCurso.dias, 
                horas: datosCurso.horas,
                thumb: datosCurso.thumb
            }, replace: true})
        }else{
            console.log('Solicitud fallida:');
            throw new Response("Sin datos", {status: 404})  
        }
    }catch(e){
      console.error('Error durante la solicitud:');
      throw new Response("Sin datos", {status: 404})
    }
}

    return(
        <div id="contenedor" className="bg-fondosecundario flex  justify-center ">
            <div id="tarjeta" className=" flex flex-col items-center bg-fondoprimario rounded-2xl h-full ">
                <div id="cabecera" className="text-center **:pb-5">
                    <h1 className="font-bold text-5xl text-txtterciario">¡Bienvenido al curso!</h1>
                    <p className="text-6xl text-txtprimario font-bold">Cursonombre</p>
                    <p>Por favor, confirme que los datos ingresados sean correctos</p>
                </div>
                {
                    estaCargando ? <>espere...</> :
                <>

                <div id="datosalumno" className="bg-fondosecundario rounded-lg flex flex-col gap-2 p-5 m-5 **:p-1 **:rounded-md">
                    <div className="**:bg-fondoprimario gap-2 grid grid-cols-2 bp750:grid-cols-4">
                        <span>Nombre: {datosUsuario.nombre}</span>
                        <span>Apellido: {datosUsuario.apellido}</span>
                        <span>DNI: {datosUsuario.dni}</span>
                        <span>CUIL: {datosUsuario.cuil}</span>
                        <span>Genero: {datosUsuario.genero}</span>
                        <span>Nacionalidad: {datosUsuario.nacionalidad}</span>
                        <span>Fecha de nacimiento: {datosUsuario.nacimiento}</span>
                        <span>Estudios: {datosUsuario.estudios}</span>
                    </div>
                    <div className="**:bg-fondoprimario gap-2 grid grid-cols-2 bp750:grid-cols-4">
                        <span>Telefono1: {datosUsuario.telefono1}</span>
                        <span>Telefono2: {datosUsuario.telefono2}</span>
                        <span>Email: {datosUsuario.email}</span>
                    </div>
                    <div className="**:bg-fondoprimario gap-2 grid grid-cols-2 bp750:grid-cols-4">
                        <span>Localidad: {datosUsuario.localidad}</span>
                        <span>Calle: {datosUsuario.dir_calle}</span>
                        <span>numero: {datosUsuario.dir_numero}</span>
                        <span>dpto: {datosUsuario.dir_pisodpto}</span>
                    </div>
                </div>
               
                <p>Si alguno de los datos es incorrectos, presione el botón Volver</p>
                <div id="botones" className=' text-txtsecundario text-center flex flex-col bp750:flex-row justify-between gap-5 font-bold '>
                    <Link to="/exito" className="bg-red-500 p-3 rounded-lg" onClick={() => navegar(-1)}>Volver</Link>
                    <button className="bg-botonprimario p-3 rounded-lg" onClick={() => validaConexionGoogle(datosGoogle, baseURL)} >Confirmar</button>
                </div>
                </>}
            </div> 
            
        </div>

    )
}