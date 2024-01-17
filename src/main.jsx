import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import App from './App.jsx'
import Client from './assets/routes/Client.jsx'
import Adm from './assets/routes/Adm.jsx'
import Home from './assets/routes/Home.jsx'

// Rotas 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "client",
        element: <Client />
      },

      {
        path: "adm",
        element: <Adm />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
