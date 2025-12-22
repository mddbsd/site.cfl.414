import imgMaquillaje from './big_maquillaje.png';
import imgProgramacion from './big_programacion.png';
import imgDefault from './big_default.jpg';

import type { ImagenProps } from '../../ts/interfaces';

export default function ImagenCurso( {imagen, className}: ImagenProps ){
    function seleImg(){
     switch(imagen){
            case "estetica":
                return(imgMaquillaje)
                break;
            case "tec":
                return(imgProgramacion)
                break;
            default:
                return(imgDefault)
        }
    }
    return(
        <img src={seleImg()} alt={seleImg()} className={className} />
    )
}