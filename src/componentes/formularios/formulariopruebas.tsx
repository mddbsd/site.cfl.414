import '../../css/formularioinscripcion.css'
interface FormProps {
    trayecto: string
}
export default function FormularioPruebas({trayecto}: FormProps){
    return(
        <>
            <div className="relative z-0 w-full mb-5">
                <input
                    type="text"
                    name="curso"
                    placeholder=" "
                    defaultValue={trayecto}
                    required
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"></label>
                <span className="text-sm text-red-600 hidden" id="error">Se requiere Curso</span>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="nombre"
                placeholder=" "
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nombre (como figura en el DNI)</label>
              <span className="text-sm text-red-600 hidden" id="error">Se requiere nombre</span>
            </div>
    
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="apellido"
                placeholder=" "
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Apellido (Como figura en el DNI)</label>
              <span className="text-sm text-red-600 hidden" id="error">Se requiere Apellido</span>
            </div>
        </>
    )
}