
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Cyclist from '../Cyclist'
import Competition from '../Competition'
import Biographies from '../Biographies'

import React from 'react'

import './App.css'
import Navbar from '../../Components/Navbar'



const AppRouter = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/Cyclist', element: <Cyclist /> },
        { path: '/Competition', element: <Competition /> },
        { path: '/Biographies', element: <Biographies /> }
    ])
    return routes
}

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter /> 
        </BrowserRouter>
    )
}

export default App