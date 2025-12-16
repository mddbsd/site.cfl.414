//Originalmente era solo un error 404... le quedó el nombre todo esto se cambia en la 
//refactorización
//https://www.ibm.com/mx-es/think/topics/code-refactoring
import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router"
interface PropsTarjeta{
    estado?: number
    mensaje: string
}
function Tarjeta({estado, mensaje}: PropsTarjeta){
    const navegar = useNavigate();
    return(
        <div id="contenedor" className="h-screen bg-fondosecundario content-center justify-center flex items-center">
            <div id="tarjeta" className="**:mb-5 bg-fondoterciario rounded-2xl shadow-xl/20 text-center content-center h-70 w-100">
                <h1 className="text-5xl text-txttitularprimario font-bold mb-5">{estado}</h1>
                <p className="text-md">Algo no está bien...</p>
                <p className="text-xs">{mensaje}</p>
                <button onClick={() => navegar(-1)}>Volver</button>
            </div>
        </div>
    )

}
/*
    probando error element
    usenavigate devuelve una función que permite la navegación en base a eventos

    useRouteError contiene los mensajes de error y el stacktrace

    el hook useRouteError da un error de tipos cuando quiero acceder, sigo investigando eso...
*/
export default function Error404(){
    const error  = useRouteError();
    /**
        El tipo de la funcion iseRouteError es 'unknown' por diseño, ya que puede devolver diferentes
        tipos, entonces typescript daba error al querer acceder al dato por no estar explicitamente cdvinico 
        su tipo.
        La solución es hacer un estrechamiento o "narrowing" de tipos.

        https://esdocu.com/typescript/handbook/narrowing/

        se comprueba primero que la variable error sea del tipo correcto, react-router nos da
        la funcion isRouteErrorResponse que nos ayuda con esto.

        con respecto a los tipos, en typescript hay que tipificar tambien las funciones
        cuando esta recibe props
        https://www.webdevtutor.net/blog/typescript-type-for-react-function
     */

    if(isRouteErrorResponse(error)){
        //devuelve true si error es error de Ruta, como un 404
        return(
            <Tarjeta estado={error.status} mensaje={error.data}/>
        )
    }
    let mensajeError: string;
    if(error instanceof Error){
        //Comprueba errores de javascript en general y otros valores
        //https://esdocu.com/typescript/handbook/narrowing/#instanceof-narrowing
        mensajeError = error.message;
    }else if (typeof error === 'string'){
        mensajeError = error;
    }else{
        mensajeError = "Ocurrio un error desconocido."
    }

    return(
        <Tarjeta mensaje={mensajeError} />
    )
 
}