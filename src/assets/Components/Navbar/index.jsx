import { NavLink } from "react-router-dom"
import { IconName } from 'boxicons'  // Aqui importamos la libreria de BoxIcons para los iconos 


const Navbar = () => {

    const activeStyle = ' underline underline-offset-4'

    return (  // Aqui creamos la barra de navegacion usando los link usando el App que tiene las rutas a usar
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light bg-sky-600">
            <box-icon name='cycling' size='lg' color="white" animation="fade-right"></box-icon>
            <ul className="flex items-center gap-7">
                <li className="font-semibold text-lg gap-3 text-white" >
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Home
                    </NavLink>
                </li>
                <li className="text-lg text-white">
                    <NavLink to='/Cyclist'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Ciclista
                    </NavLink>
                </li>
                <li className="text-lg text-white">
                </li>
                <li className="text-lg text-white">
                    <NavLink to='/Biographies'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Biografia
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

