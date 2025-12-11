//componentes
import HeroInicio from "./layout/heros/heroinicio"
import Numeros from "./layout/stats/numeros"

export default function Landing(){
    return(
        <div id="envolturalanding" className="bg-fondocfl">
            <div id="hero">
                <HeroInicio />
                <Numeros />
            </div>
        </div>

    )
}