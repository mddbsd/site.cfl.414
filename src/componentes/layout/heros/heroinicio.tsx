//componentes
import { Link } from 'react-router'

//imagenes
import imgHero from '../../../img/heroinicio-placeholder.jpeg'

export default function HeroInicio(){
    return(
        <div id="hero" className='flex max-[800px]:flex-col justify-center bg-blue-500 p-10 gap-4 py-20 px-15'>
            <div id="herotexto" className='text-white max-[800px]:order-last'>
                <h1 className='text-5xl font-extrabold'>Transformá tu futuro con educación de calidad</h1>
                <p className='py-10 text-lg'>En CFL 414 La Matanza ofrecemos formación profesional gratuita con certificación oficial para potenciar tu desarrollo personal y laboral.</p>
                <div id="herobotones" className='flex gap-10  text-blue-500 [&_#boton]:bg-white [&_#boton]:rounded-md [&_#boton]:p-5 [&_#boton]:hover:bg-orange-500 [&_#boton]:hover:text-white'>
                    <Link id="boton" to="/">Ver cursos disponibles</Link>
                    <Link id="boton" to="/">Más información</Link>
                </div>
            </div>
            <div id="heroimagen" className='size-100 max-[800px]:w-full max-[800px]:order-first'>
                <img src={imgHero} className=''/>
            </div>
        </div> 
    )
}