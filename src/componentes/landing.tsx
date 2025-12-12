//componentes
import Destacados from "./heros/destacados"
import HeroInicio from "./heros/heroinicio"
import Llamada from "./heros/llamada"
import Numeros from "./stats/numeros"

export default function Landing(){
    return(
        <div id="envolturalanding" className="bg-fondocfl overflow-y-scroll">
            <div id="hero">
                <HeroInicio />
            </div>
            <div id="hero">
                <Numeros />
            </div>
            <div id="destacados">
                <Destacados /> 
            </div>
            <div id="llamada">
                <Llamada /> 
            </div>
        </div>

    )
}