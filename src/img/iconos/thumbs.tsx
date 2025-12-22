import administracion from './icon_administracion.jpg'
import comunica from './icon_comunica.jpg'
import construccion from './icon_costura.jpg'
import costura from './icon_costura.jpg'
import cuero from './icon_cuero.jpg'
import electricidad from './icon_electricidad.jpg'
import electronico from './icon_electronico.jpg'
import estetica from './icon_estetica.jpg'
import marketing from './icon_marketing.jpg'
import mec from './icon_mec.jpg'
import tec from './icon_tec.jpg'
import turistico from './icon_turistico.jpg'

import type { ImagenProps } from '../../ts/interfaces'

export default function ThumbCategoria( {imagen, className}: ImagenProps ){
    function seleCat(): string {
        switch(imagen){
            case "construccion":
                return(construccion)
                break;
            case "comunica":
                return(comunica)
                break;
            case "costura":
                return(costura)
                break;
            case "cuero":
                return(cuero)
                break;
            case "estetica":
                return(estetica)
                break;
            case "marketing":
                return(marketing)
                break;
            case "mec":
                return(mec)
                break;
            case "tec":
                return(tec)
                break;
            case "turistico":
                return(turistico)
                break;
            case "electricidad":
                return(electricidad)
                break;
            case "administracion":
                return(administracion)
                break;
            case "electronico":
                return(electronico)
                break;
            default:
                return("error")
        }
    }
    return(
        <img src={seleCat()} alt={seleCat()} className={className} />
    )
}