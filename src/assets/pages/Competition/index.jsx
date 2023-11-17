
import { useState, useEffect } from 'react'

import Layout from "../../Components/Layout"
import Card from '../../Components/Carrusel'

import React from 'react'
import Carrusel from '../../Components/Carrusel'

function Competition() {
    const [items, setItems] = useState(null)
    useEffect(() => {
        // https://fakeapi.platzi.com/
        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Cyclist/')
            .then(response => response.json())
            .then(data => setItems(data))

    }, [])
    return (
        <Layout>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg pt-28'>
                {
                    items?.map(item => (
                        <Carrusel key={item.id} data={item} />
                    ))
                }
            </div>
        </Layout>

    )
}

export default Competition;