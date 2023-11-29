import { useState, useEffect } from 'react'

import Layout from "../../Components/Layout"
import Card from '../../Components/Card'    // Aqui se importan  todad las dependencias para el proyecto  

import React from 'react' 

function Home() {   // Aqui se crea la funcion que contiene todo lo del Home
    const [items, setItems] = useState(null)
    useEffect(() => {
        // https://fakeapi.platzi.com/
        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Cyclist/')  // Aqui va el link de la base de datos
            .then(response => response.json())  //Aqui lo que reciba de la base de datos lo convierata a formato Json
            .then(data => setItems(data))       

    }, [])
    return ( // Aqui se retorna los datos para que se puedan usar en la Card
        <Layout>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg pt-28'>
                {
                    items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
        </Layout>

    )
}

export default Home

