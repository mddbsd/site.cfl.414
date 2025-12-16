export type TipoCurso = [{
    idCurso: number
    trayecto: string
    familia: string
    cargaHoraria: number
    mes: string
    dias: [string]
    horas: [number]
    thumb?: string
    imagen?: string
    resumen?: string
    descripcion?: string
    estaDisponible: boolean
    esDestacado: boolean
    matriculaMax: number
    centro: string
    sede:{
        idSede: number
        nombre: string
        localidad: string
        direccion: string
        gps:[number]
    } 
}]