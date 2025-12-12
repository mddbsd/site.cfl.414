export default function Final(){
    return(
        <div id="final" className="bg-fondosecundario h-max flex flex-col gap-10 items-center py-10 bp750:p-12 text-center">
            <h4 className="text-txttitularsecundario text-5xl bp750:text-6xl">¿Listo para comenzar tu transformación?</h4>
            <p className="text-txtsecundario text-2xl bp750:text-4xl px-20">Formación de calidad con todos los beneficios que necesitas para tu desarrollo profesional</p>
            <div id="botonesfinal" className="flex flex-col bp750:flex-row gap-10 [&_#boton]:bg-botonsecundario [&_#boton]:hover:bg-botonhover [&_#boton]:rounded-md [&_#boton]:p-2">
                <button id="boton">Inscribirme Ahora</button>
                <button id="boton">Solicitar Información</button>
            </div>
        </div>
    )
}