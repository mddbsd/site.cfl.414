import imgPortada from '../img/nosotros-portada.jpg'
export default function Nosotros(){
    return(
        <div id="nosotros" className="bg-fondosecundario h-screen flex p-20">
            <div id="texto">
                <h1 className="text-txtsecundario text-6xl mb-10">¡Encantado en conocerte!</h1>
                <p className='text-txtsecundario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos at hic voluptas dignissimos adipisci voluptatem labore quibusdam dolorem aspernatur! Molestias fugiat ipsam accusamus ipsa omnis est suscipit minus repudiandae!</p>
            </div>
            
            <div id="imagen" className='basis-7xl'>
                <img src={imgPortada}></img>
            </div>
        </div>
    )
}