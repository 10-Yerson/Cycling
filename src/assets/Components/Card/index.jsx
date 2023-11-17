

import Layout from "../../Components/Layout"
import { IconName } from 'boxicons'

const Card = (data) => {
    return (
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
            </figure>

        </div>

    );
};

export default Card;




