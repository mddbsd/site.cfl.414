//librerias y utiliadades
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

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

//https://niaxus.com/2025/03/15/como-implementar-lazy-loading-en-react/
//hay que implementar esto

const rutasCfl = createBrowserRouter([
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
        Component: Cursos
      },
      {
        path: "/cursos/:id",
        Component: CursoDetalle
      },
      {
        path: "/nosotros",
        Component: Nosotros
      },
      {
        path: "/contacto",
        Component: Contacto
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rutasCfl} />
  </StrictMode>,
)
