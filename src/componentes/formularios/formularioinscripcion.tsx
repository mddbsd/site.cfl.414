import '../../css/formularioinscripcion.css'
interface FormProps {
    trayecto: string
}
export default function FormularioInscripcion( {trayecto}: FormProps){
    return(
        <>
            <div className="relative z-0 w-full mb-5">
                <input
                    type="text"
                    name="curso"
                    defaultValue={trayecto}
                    placeholder=" "
                    disabled = {true}
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
      

                <div className="relative z-0 w-full mb-5">
                  <select
                    name="genero"
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  >
                    <option value="nada" >Seleccione una opción</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="no binario">No Binario</option>
                    <option value="otro">Otro</option>
                  </select>
                  <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Genero</label>
                  <span className="text-sm text-red-600 hidden" id="error">Debe elegir una opción</span>
                </div>
      

                <div className="relative z-0 w-full mb-5">
                  <input
                    type="text"
                    name="dni"
                    required
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">DNI</label>
                  <span className="text-sm text-red-600 hidden" id="error">Se requiere DNI</span>
                </div>
      

                <div className="relative z-0 w-full mb-5">
                  <input
                    type="text"
                    name="cuil"
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">CUIL</label>
                  <span className="text-sm text-red-600 hidden" id="error">Se requiere CUIL</span>
                </div>
      

                <div className="relative z-0 w-full mb-5">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Email</label>
                  <span className="text-sm text-red-600 hidden" id="error">Se requiere Email</span>
                </div>
      
   
                <div className="relative z-0 w-full mb-5">
                  <input
                    type="text"
                    name="telefono1"
                    required
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Teléfono celular (completo)</label>
                  <span className="text-sm text-red-600 hidden" id="error">Se requiere Celular</span>
                </div>
      
                <div className="relative z-0 w-full mb-5">
                  <input
                    type="text"
                    name="telefono2"
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Teléfono alternativo</label>
                  <span className="text-sm text-red-600 hidden" id="error">Se requiere Celular</span>
                </div>
      
                <div className="relative z-0 w-full mb-5">
                  <input
                    type="date"
                    name="nacimiento"
                    required
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Fecha de nacimiento</label>
                  <span className="text-sm text-red-600 hidden" id="error">Se requiere Fecha de nacimiento</span>
                </div>
                <div className="relative z-0 w-full mb-5">
                  <input
                    type="text"
                    name="nacionalidad"
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nacionalidad</label>
                  <span className="text-sm text-red-600 hidden" id="error">Se requiere Nacionalidad</span>
                </div>
                <div className="relative z-0 w-full mb-5">
                  <input
                    type="text"
                    name="localidad"
                    required
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Localidad</label>
                  <span className="text-sm text-red-600 hidden" id="error">Se requiere Localidad</span>
                </div>
      
                <div className="flex flex-row space-x-4">
                  <div className="relative z-0 w-full mb-5">
                    <input
                      type="text"
                      name="dir_calle"
                      required
                      placeholder=" "
                      className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                    <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Calle</label>
                    <span className="text-sm text-red-600 hidden" id="error">Se requiere Calle</span>
                  </div>
                  <div className="relative z-0 w-full">
                    <input
                      type="text"
                      name="dir_numero"
                      required
                      placeholder=" "
                      className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                    <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Número</label>
                    <span className="text-sm text-red-600 hidden" id="error">Se requiere Número</span>
                  </div>
                  <div className="hidden relative z-0 w-full">
                    <input
                      type="text"
                      name="control"
                      required
                      defaultValue="nv"
                      className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                    <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Número</label>
                    <span className="text-sm text-red-600 hidden" id="error">Se requiere Número</span>
                  </div>
                  <div className="relative z-0 w-full">
                    <input
                      type="text"
                      name="dir_pisodpto"
                      placeholder=" "
                      className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                    <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Pisp/Dpto</label>
                    <span className="text-sm text-red-600 hidden" id="error">Se requiere Número</span>
                  </div>
                </div>
      
                <div className="relative z-0 w-full mb-5">
                  <select
                    name="estudios"
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  >
                    <option value="nada">Seleccione opción</option>
                    <option value="Primario Completo">Primario Completo</option>
                    <option value="Secundario Completo">Secundario Completo</option>
                    <option value="Secundario Incompleto">Secundario Incompleto</option>
                    <option value="Terciario Completo">Terciario Completo</option>
                    <option value="Terciario Incompleto">Terciario Incompleto</option>
                    <option value="Univeritario Incompleto">Univeritario Incompleto</option>
                    <option value="Universitario Completo">Universitario Completo</option>
                  </select>
                  <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nivel de estudios</label>
                  <span className="text-sm text-red-600 hidden" id="error">Debe elegir una opción</span>
                </div> 
    </>
    )
}