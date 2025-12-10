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

const rutasCfl = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <Error404 />,
    children:[
      {
        index: true,
        Component: Landing
      }
    ]

  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rutasCfl} />
  </StrictMode>,
)
