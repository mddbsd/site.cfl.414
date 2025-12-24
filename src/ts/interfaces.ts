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
    matriculaMin: number
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

export interface TarjetaCursoProps{
    id: number
    trayecto: string
    thumb?: string
    resumen?: string
    mes : string
    cargaHoraria: number
    matriculaMax: number
    matriculaMin: number
    localidad: string
}

export interface ImagenProps{
    idCurso?: number
    imagen?: string
    className?: string
}

export interface Alumno{
    curso: string
    nombre: string
    apellido: string
    genero: string
    dni: string
    cuil: string
    email: string
    telefono1: string
    telefono2: string
    nacimiento: string
    nacionalidad: string
    localidad: string
    dir_calle: string
    dir_numero: string
    dir_pisodpto: string
    estudios: string
    control: string
}

export interface AlumnoPrueba {
    curso: string
    nombre: string
    apellido: string
}

export interface ComprobanteDatos{
    id: string
    apyn:string
    fecha: Date
    trayecto: string
    mes: string
    dias: string[]
    horas: number[]
}
