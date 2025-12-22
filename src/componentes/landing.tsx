//componentes
import Destacados from "./heros/destacados"
import HeroInicio from "./heros/heroinicio"
import Llamada from "./heros/llamada"
import Numeros from "./stats/numeros"
import Final from "./heros/final"

export default function Landing(){
    return(
        <div id="envolturalanding" className="bg-fondoprimario">
            <HeroInicio />
            <Numeros />
            <Destacados />
            <Llamada />
            <Final />
        </div>

    )
}