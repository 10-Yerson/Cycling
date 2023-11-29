import { useState, useEffect } from 'react'

import Layout from "../../Components/Layout"
import Card from '../../Components/Card'    // Aqui Importamos todas las paginas del proyecto
import Cyclist from '../../pages/Cyclist'
import Dasboard from '../../Components/Dasboard' // Aqui Importamos Dasboard que contiene los estilos que se muestran en el Home

import React from 'react'

function Home() {  // Aqui se retorna el Home Con el component Dashboard que se mostrara
    return (
        <>
            <Dasboard/> 
        </>
    )
}

export default Home


