//librerias y utiliadades
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router'
=======
import { createBrowserRouter, RouterProvider, type DataRouter } from 'react-router'
import { loaderCursoDetalle, loaderGaleria, actionConfirmar } from './ts/loaders'
>>>>>>> imp/detallecurso

//estilos
import './css/general.css'

//componentes
import Layout from './componentes/layout'
import Error404 from './componentes/errores/error404'
import Landing from './componentes/landing'
import Cursos from './componentes/cursos'
import Nosotros from './componentes/nosotros'
import Contacto from './componentes/contacto'
import CursoDetalle from './componentes/galeria/cursodetalle'
<<<<<<< HEAD
=======
import Confirmar from './componentes/galeria/confirmar'
import Exito from './componentes/galeria/exito'
import OutletEnviarDatos from './componentes/outletEnviarDatos'
>>>>>>> imp/detallecurso

//https://niaxus.com/2025/03/15/como-implementar-lazy-loading-en-react/
//hay que implementar esto


<<<<<<< HEAD
const rutasCfl = createBrowserRouter([
=======
const rutasCfl: DataRouter = createBrowserRouter([
>>>>>>> imp/detallecurso
  {
    path: "/",
    Component: Layout,
    errorElement: <Error404 />,
    children:[
      {
        index: true,
        Component: Landing
      },
      {
        path: "/cursos",
<<<<<<< HEAD
        Component: Cursos
      },
      {
        path: "/cursos/:id",
        Component: CursoDetalle
=======
        Component: Cursos,
        //Los loaders permiten enviar datos al componente.
        //https://reactrouter.com/start/framework/data-loading
        //https://reactrouter.com/start/data/data-loading
        loader: loaderGaleria
      },
      {
        path: "/cursos/:cursoId",
        Component: OutletEnviarDatos,
        loader: loaderCursoDetalle,
        children:[
          {
            path: "/cursos/:cursoId/detalle",
            Component: CursoDetalle,
          },
          {
            path: "/cursos/:cursoId/detalle/confirmar",
            Component: Confirmar,
            action: actionConfirmar
          },
          {
            path: "/cursos/:cursoId/detalle/exito",
            Component: Exito
          }]
>>>>>>> imp/detallecurso
      },
      {
        path: "/nosotros",
        Component: Nosotros
      },
      {
        path: "/contacto",
<<<<<<< HEAD
        Component: Contacto
=======
        Component: Contacto,
>>>>>>> imp/detallecurso
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rutasCfl} />
  </StrictMode>,
)
