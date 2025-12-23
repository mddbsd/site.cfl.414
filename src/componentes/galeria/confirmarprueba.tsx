
import { Link } from "react-router"
export default function ConfirmarPrueba(){

    return(
        <div id="contenedor" className="bg-fondosecundario flex  justify-center ">
                                        {/*Selector de herederos directos **: */}
            <div id="tarjeta" className=" flex flex-col items-center bg-fondoprimario rounded-2xl h-full ">
                <div id="cabecera" className="text-center **:pb-5">
                    <h1 className="font-bold text-5xl text-txtterciario">¡Bienvenido al curso!</h1>
                    <p className="text-6xl text-txtprimario font-bold">Cursonombre</p>
                    <p>Por favor, confirme que los datos ingresados sean correctos</p>
                </div>
                <div id="datosalumno" className="bg-fondosecundario rounded-lg flex flex-col gap-2 p-5 m-5 **:p-1 **:rounded-md">
                    <div className="**:bg-fondoprimario gap-2 grid grid-cols-2 bp750:grid-cols-4">
                        <span>Nombre: Marcelo</span>
                        <span>Apellido: Linelli</span>
                        <span>DNI: 12345</span>
                        <span>CUIL: 1123334</span>
                        <span>Genero: asdasd</span>
                        <span>Nacionalidad: asdasd</span>
                        <span>Fecha de nacimiento: asdasd</span>
                        <span>Estudios: asdasd</span>
                    </div>
                    <div className="**:bg-fondoprimario gap-2 grid grid-cols-2 bp750:grid-cols-4">
                        <span>Telefono1: asdasd</span>
                        <span>Telefono2: asdasd</span>
                        <span>Email: asdasd</span>
                    </div>
                    <div className="**:bg-fondoprimario gap-2 grid grid-cols-2 bp750:grid-cols-4">
                        <span>Localidad: asdas</span>
                        <span>Calle: adsasd</span>
                        <span>numero: 23424</span>
                        <span>dpto: asdasd</span>
                    </div>
                </div>
                <p>Si alguno de los datos es incorrectos, presione el botón Volver</p>
                <div id="botones" className=' text-txtsecundario text-center flex flex-col bp750:flex-row justify-between gap-5 font-bold '>
                    <Link to="/exito" className="bg-red-500 p-3 rounded-lg" onClick={(e) => console.log(e)}>Volver</Link>
                    <Link to="/exitp" className="bg-botonprimario p-3 rounded-lg" >Confirmar</Link>
                </div>
            </div> 
            
        </div>

    )
}