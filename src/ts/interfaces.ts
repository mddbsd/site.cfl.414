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
<<<<<<< HEAD
=======
    matriculaMin: number
>>>>>>> imp/detallecurso
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

<<<<<<< HEAD
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
=======
export interface TarjetaCursoProps{
    id: number
    trayecto: string
    thumb?: string
>>>>>>> imp/detallecurso
    resumen?: string
    mes : string
    cargaHoraria: number
    matriculaMax: number
    matriculaMin: number
    localidad: string
}
<<<<<<< HEAD
=======

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
}

export interface AlumnoPrueba {
    curso: string
    nombre: string
    apellido: string
}
>>>>>>> imp/detallecurso
