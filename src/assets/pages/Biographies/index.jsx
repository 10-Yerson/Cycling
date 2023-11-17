
import Layout from "../../Components/Layout"
import { IconName } from 'boxicons'


function Biographies() {
    return (
        <div className="bg-gray-100 font-sans pt-48 h-screen">
            <div class="container mx-auto p-8">

                <header className="text-center h-64">
                    <h1 className="text-4xl font-bold text-indigo-700 pb-3">Yerson Dreyer</h1>
                    <p className="text-gray-600">Software Developmet</p>
                </header>

                <section className="bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-bold text-indigo-700 mb-4">Biografía</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Hello, my name is Yerson Dreyer, I am a SENA CTPI Trainee. I study software analysis and development. I am from Paletara, municipality of Purace.
                    </p>
                </section>

                <section class="mt-8">
                    <h2 class="text-2xl font-bold text-indigo-700 mb-4">Redes Sociales</h2>
                    <ul class="flex space-x-4">
                        <li>
                            <a href="#" class="text-indigo-500 hover:text-indigo-700 transition duration-300">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            </a>
                        </li>
                        <div className='flex gap-2'>
                            <box-icon type='logo' name='google' size='' animation=""></box-icon>
                            <box-icon type='logo' name='github' size='' animation=""></box-icon>
                            <box-icon type='logo' name='facebook' size='' animation=""></box-icon>
                            <box-icon type='logo' name='whatsapp' size='' animation=""></box-icon>
                            <box-icon type='logo' name='gmail' size='' animation=""></box-icon>

                        </div>

                    </ul>
                </section>


            </div>


        </div>

    )
}

export default Biographies
