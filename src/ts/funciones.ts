/**
 * le da formato a la hora
 * @param hr 
 * @returns 
 */
export function formatHoras( hr: number){
    let horaFormateada: string = "";
    (hr < 1000) ? horaFormateada = `0${hr}` : horaFormateada = hr.toString();
    horaFormateada = horaFormateada.slice(0,2) + ":" + horaFormateada.slice(2);

    return horaFormateada;

}

/**
 * Simplemente genera un string aleatorio de 6 digitos, pero con la posibilidad de pasar
 * la longitud como argumento.
 * No se verifica que el string ya exista, solo lo genera, sirve para verificar el registro
 * desde la pagina
 * 
 * Primero se genera un numero con Math.random(). Se genera un numero entre 0 y 1,
 * luego se convierte el numero a un string, el argumento de la funcion es un punto base
 * le indica a la funcion que reprecente digitos mas alla del 0-9,
 * Finalmente cortamos el 0. al comienzo del numero decimal y terminar la cadena con el argumento
 * longitud con .substring(2, length+2)
 * +2 es para reemplazar los 2 primeros digitos que quitamos al comienzo
 * 
 * 
 * 
 * @param longitud cantidad de caracteres del string 
 * @returns string aleatorio
 */
export function randomId(longitud: number = 5) {
  return Math.random().toString(36).substring(2, longitud + 2);
}