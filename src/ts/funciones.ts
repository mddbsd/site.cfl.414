export function formatHoras( hr: number){
    let horaFormateada: string = "";
    (hr < 1000) ? horaFormateada = `0${hr}` : horaFormateada = hr.toString();
    horaFormateada = horaFormateada.slice(0,2) + ":" + horaFormateada.slice(2);

    return horaFormateada;

}