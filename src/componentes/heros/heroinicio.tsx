//componentes
import { Link } from 'react-router'

//imagenes
import imgHero from '../../img/heroinicio-placeholder.jpeg'

export default function HeroInicio(){
    return(
        <div id="hero" className='bg-fondosecundario flex flex-col bp750:flex-row justify-center gap-4 p-3 bp750:p-15 '>
            <div id="herotexto" className='text-txtsecundario order-last'>
                <h1 className='text-5xl font-extrabold'>Transformá tu futuro con educación de calidad</h1>
                <p className='py-10 text-lg'>En CFL 414 La Matanza ofrecemos formación profesional gratuita con certificación oficial para potenciar tu desarrollo personal y laboral.</p>
                <div id="herobotones" className='text-txtterciario flex flex-col bp750:flex-row gap-10 font-bold [&_#boton]:bg-botonsecundario [&_#boton]:hover:bg-botonhover [&_#boton]:hover:text-txtsecundario [&_#boton]:rounded-md [&_#boton]:p-5 [&_#boton]:shrink-0'>
                    <Link id="boton" to="/">Ver cursos disponibles</Link>
                    <Link id="boton" to="/">Más información</Link>
                </div>
            </div>
            <div id="heroimagen" className='order-first bp750:order-last'>
                <img src={imgHero} className=''/>
            </div>
        </div>
    )
}