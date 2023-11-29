
import { IconName } from 'boxicons'  // Aqui importamos la libreria de BoxIcons para los iconos 

const Card = () => {   // Aqui se crea una función que muestra contenido la pagina principal al ingresar
    return (
        <div className="pt-48 p-5">
            <h1 className='text-4xl font-bold text-star pt-10 animate-pulse pl-16'>Free Wheel Colombia</h1>
            <p className='pt-10 text-lg text-blue-500 font-bold pl-16'>Explore the Beauty on Two Wheels</p>
            <div className='flex flex-row gap-10'>
                <div className='w-6/12'>
                    <p className='pt-16 text-sm text-stale-950 mb-10 w-96 pl-16'>
                        Explore the thrilling world of Colombian cycling on our page.
                        From the peaks of the Andes to victories in the Tour de
                        France, cyclists like Nairo Quintana and Egan Bernal have
                        taken Colombia's passion to the pinnacle of global cycling.
                        Join us in celebrating the legacy of these heroes on two
                        wheels. Welcome to the summit of Colombian cycling!
                    </p>
                </div>
                <div className=''>
                    <img className='object-cover w-7/12 translate-y-3.5 rounded-lg animate-bounce' src="https://triatletasenred.sport.es/wp-content/uploads/Diseno-sin-titulo-2023-02-27T181250.699.png" alt="" />

                </div>

            </div>
            <div className='pt-16 pl-16'> 
                <box-icon type='logo' name='google' size='md' animation=""></box-icon>
                <box-icon type='logo' name='github' size='md' animation=""></box-icon>
                <box-icon type='logo' name='facebook' size='md' animation=""></box-icon>
                <box-icon type='logo' name='whatsapp' size='md' animation=""></box-icon>
                <box-icon type='logo' name='gmail' size='md' animation="/* flashing */"></box-icon>

            </div>

        </div>

    )
}

export default Card

