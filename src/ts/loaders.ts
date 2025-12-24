import listaCursos from '../json/cursos.json'
import type { Params } from 'react-router';
import type { Alumno } from './interfaces';

//https://duckduckgo.com/?q=git+clone+ip%2Bport&ia=web
/**
 * Carga los cursos en la galería, en vez de importarlos en el componente, los cargo cuando se
 * llama a la ruta /cursos. 
 * async sirve para que no se espere la respuesta para ejecutar la funcion, permitiendo
 * que otras se ejecuten simultaneamente
 * 
 * @returns lista de cursos en el archivo cursos.json 
 */
export async function loaderGaleria() {
    return listaCursos    
}

/**
 * Carga el curso seleccionado en la ruta /cursos/cursoId, toma el valor de la variable cursoId en la url
 * y busca el objeto que coincida con esa id. Luego lo carga en el componente que activo
 * este loader
 * 
 * @param param0 contiene la variable obtenida desde la URL
 * @returns el curso que coincide con el id
 */
export async function loaderCursoDetalle({ params } : { params : Params<"cursoId">}) {
  const id = parseInt(params.cursoId as string);
  const curso = listaCursos.find(curs => {
      return curs.idCurso === id
    });
  return curso ;
};



export async function actionConfirmar( { request } : any ){
  const datosForm = await request.formData();
  const alumno: Alumno = {
    curso: datosForm.get("curso"),
    nombre: datosForm.get("nombre"),
    apellido: datosForm.get("apellido"),
    genero: datosForm.get("genero"),
    dni: datosForm.get("dni"),
    cuil: datosForm.get("cuil"),
    email: datosForm.get("email"),
    telefono1: datosForm.get("telefono1"),
    telefono2: datosForm.get("telefono2"),
    nacimiento: datosForm.get("nacimiento"),
    nacionalidad: datosForm.get("nacionalidad"),
    localidad: datosForm.get("localidad"),
    dir_calle: datosForm.get("dir_calle"),
    dir_numero: datosForm.get("dir_numero"),
    dir_pisodpto: datosForm.get("dir_pisodpto"),
    estudios: datosForm.get("estudios"),
    control: datosForm.get("nv")
  }
  return alumno;
}