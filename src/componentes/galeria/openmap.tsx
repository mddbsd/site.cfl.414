    /*
    Estos son los componentes que genera react-leaflet a partir de las funciones de leaflet.
    La documentación con el manejo de las funciones esta aca https://leafletjs.com/reference.html
    En la pagina de react-leaflet hay buenos ejemplos para usar los componentes https://react-leaflet.js.org/docs/example-popup-marker/

    MapContainer es componente utilizado para crear el mapa y manipularlo. Cada prop es una configuración .
    TileLayer obtiene y renderiza las capas con las que estan compuestos los mapas. Podemos usar distintos servidores
    Usamos Open Street Map, un desarrollo comunitario que brinda una API gratuita y mantenida por la comunidad
    https://www.openstreetmap.org/about

    Guia util https://dev.to/digitalpollution/a-friendly-guide-to-using-react-leaflet-with-react-42k7
    */

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
//estos son los estilos que se configuran con leaflet, se pueden cambiar por clasess de tailwind,
import 'leaflet/dist/leaflet.css';
import '../../css/map.css'
import type { LatLngExpression } from "leaflet";
import marcadorMapa from '../../img/marker.svg';
import { Icon } from 'leaflet';
interface MapaProps{
    coords: number[]
    localidad: string
    direccion: string
}
/**
 * Para poder utilizar la API hay que instalar un par de dependencias
 * - leaflet: Es una librería JS con funciones para dibujar los mapas
 * - react-leaflet: Una herramienta que utiliza leaflet como base, tiene componentes para facilitar el manejo de los mapas
 * - @types/leaflet: Los tipos para los parametros que se pasan a los componentes del mapa (instalar con npm i --save-dev)
 * @param coords son las coordenadas almacenadas en el objeto curso
 * @returns el mapa en si
 */
export default function OpenMap({coords, localidad, direccion}: MapaProps){
    const posicion: LatLngExpression = [coords[0], coords[1]]
    const icono = new Icon({iconUrl: marcadorMapa, iconSize: [32,32]})
    return(
        <MapContainer 
                    className=""
                    center={posicion} 
                    zoom={15} 
                    scrollWheelZoom={false} 
                    dragging={false}
                    doubleClickZoom={false}
                    attributionControl={false}
                    zoomControl={true}   
                >
            <Marker position={posicion} icon={icono}>
                <Popup>
                    <span className="font-bold">
                        <p>{localidad}</p>
                        <p>{direccion}</p>
                    </span>
                </Popup>
            </Marker>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> |CFL 414|'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
        </MapContainer>
    )
}