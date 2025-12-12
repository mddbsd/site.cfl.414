export default function Error404(){
    return(
        <div id="contenedor" className="h-screen bg-fondosecundario content-center justify-center flex items-center">
            <div id="tarjeta" className="bg-fondoterciario rounded-2xl shadow-xl/20 text-center content-center h-70 w-100">
                <h1 className="text-5xl text-txttitularprimario font-bold mb-5">ERROR 404</h1>
                <p>Aca no está lo que buscabas</p>
            </div>
        </div>
    )
}