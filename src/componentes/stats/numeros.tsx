/**
 * Esta interface establece explicitamente los tipos de los props de la función que
 * la implementa.
 * Hay diversas maneras de implementar esta interfaz, la mas sencilla es
 * con la siguiente sintaxis en la cabecera del componente.
 * 
 * function Componente( {prop1, prop2, prop3,...}:InterfaceAImplementar )
 * 
 * Se escriben en UpperCamelCase
 */
interface ItemsProps {
    arriba: string
    abajo: string
}

export default function Numeros(){

    const items = [{
        arriba: "+15",
        abajo: "Años de experiencia"
    },{
        arriba: "+50",
        abajo: "Cursos ofrecidos"
    },{
        arriba: "+3000",
        abajo: "Egresados"
    },{
        arriba: "%100",
        abajo: "Gratuito"
    }]
    /**
     * Componente item, devuelve el los dt y dl envueltos en fragmentos (<></>) con valores
     * sacados de los props ({arriba, abajo}), al pasar los props al componente, podemos hacerlo
     * uno por uno ej:
     * 
     *      <Componente prop1={item.nombre} prop2={item.precio} prop3={item.descripcion} />
     * 
     * Si pasamos un objeto hay que propagarlo con el operador ... ej:
     * 
     *      <Componente {...objeto} />
     * 
     * Independientemente de la cantidad de props que le enviemos al componente, este los recibe como un 
     * parametro (por lo que puede llamarse de cualquier manera). Accedemos al prop a travéz
     * del parametro ej: parametro.prop1 parametro.prop2 parametro.prop3.
     * También ṕodemos desestructurar la prop para acceder directamente
     * function Componente({prop1, prop2, prop3}) 
     * 
     * Tiene que hacerse hábito establecer explicitamente todos los tipos, ya que con esto
     * prevenimos valores inesperados y mejora la legibilidad.
     * 
     * Con las interfaces podemos definir los tipos implementandolas en el argumento o al final de 
     * la desestructuración de los props.
     * 
     * https://www.freecodecamp.org/espanol/news/como-funcionan-los-tipos-en-typescript-explicado-con-ejemplos-en-javasscript-y-typescript/
     */
    function Item ({arriba, abajo}:ItemsProps){
        return(
            <>
            <dt className="text-txtterciario text-6xl font-extralight">{arriba}</dt>
            <dd className="text-txtprimario">{abajo}</dd>
            </>
        )
    }

    return(
        <div id="stats" className="bg-fondoterciario p-10">
            <dl className="grid bp750:grid-cols-4 grid-cols-2 gap-15">
                {items.map((item, key) => (
                    <div key={key} className="text-2xl text-center">
                        <Item {...item} />
                    </div>
                    
                ))}
            </dl>
        </div>
    )
}