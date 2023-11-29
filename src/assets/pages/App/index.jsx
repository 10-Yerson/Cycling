
import { useRoutes, BrowserRouter } from 'react-router-dom'  // Para usar la rutas del proyecto 
import Home from '../Home'
import Cyclist from '../Cyclist'
import Biographies from '../Biographies'                    // Importamos todas las ventanas del proyecto
import { CartContextProvider } from '../../Context'

import React from 'react'

import './App.css'   // Para los estolos del Taiwind 
import Navbar from '../../Components/Navbar'



const AppRouter = () => { // Aqui creamos una Cont para poder usar la rutas
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/Cyclist', element: <Cyclist /> },,
        { path: '/Biographies', element: <Biographies /> }
    ])
    return routes
}

const App = () => {  // Aqui es lo que se va a mostrar en la App como la barra de navegacion
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar /> 
                <AppRouter />
            </BrowserRouter>
        </CartContextProvider>
        
    )
}

export default App