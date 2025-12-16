export interface CursosJson{
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
}

export interface CursoProps{
    id: number
    trayecto: string
    estaDisponible: boolean
    categoria: string
    icono: string
    imagen: string
    resumen: string
    descripcion: string
    mesinicio: string
    dias: string[]
    horas: string
    sede: [{
        nombre: string
        muni: string
        dir: string
        gps: number[]
    }]
}

export interface TarjetaCursoProps{
    id: number
    trayecto: string
    thumb: string
    resumen?: string
    mes : string
    cargaHoraria: number
    matriculaMax: number
    matriculaMin: number
    localidad: string
}
