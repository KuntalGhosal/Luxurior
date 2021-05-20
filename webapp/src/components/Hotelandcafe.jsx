import React from 'react';
import Imgglrycard from "./Imgglrycard";
import Fone from "../assets/pexels-bruce-clark-3701434.jpg"
import Ftwo from '../assets/pexels-darcy-lawrey-1730804.jpg'
import Fthree from '../assets/pexels-emre-can-2079291.jpg'
import Ffour from '../assets/pexels-jezriel-supang-ucho-1066634.jpg'
import Ffive from '../assets/residential.jpg53.jpg'

export default function Hotelandcafe() {
    return (
        <div>
            <Imgglrycard
            Glone={Fone}
            Gltwo={Ftwo }
            Glthree={Fthree}
            // Glfive=""
            Glsix={Ffour}
            Glseven={Ffive}
            />
        </div>
    )
}
