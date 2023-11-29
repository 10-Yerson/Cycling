

import Layout from "../../Components/Layout"  // Aqui importamos el layout para que herede los estilos del mismo
import { IconName } from 'boxicons'  // Aqui importamos la libreria de BoxIcons para los iconos 

const Card = (data) => {  // En este creamos una Constante que recibe Data que es la base de datos a consumir
    return (  // Aqui se retorna la maquetacion de la tarjeta usando los datos de la base de datos        
        <div className="bg-white cursor-pointer w-56 h-80 rounded-lg shadow-md">  
            <figure className="relative mb-2 w-full h-4/5">  

                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2  px-3 py-0.5">
                    {data.data.id_type.name}
                </span>

                <img
                    className="w-full h-full object-cover rounded-lg mb-2"
                    src={data.data.photo}
                    alt=""
                    srcset=""
                />
                <p className="flex justify-between pl-3 left-0 ">
                    <span className="text-sm font-sans font-bold">{data.data.name}</span>
                </p>
                <p className="flex justify-between pl-3 pt-2">
                    <span className="text-sm font-sans">{data.data.birth_date}</span>
                </p>
                <img
                    className="absolute top-0 right-0 rounded-lg w-14 pt-2 opacity-70"
                    src="https://www.pnguniverse.com/wp-content/uploads/2020/09/Bandera-circular-de-Colombia.png"
                    alt="" />
            </figure>

        </div>

    );
};

export default Card;  // Aqui exportamos la card Para usarla en Cyclist




