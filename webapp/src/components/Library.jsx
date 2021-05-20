import React from 'react'
import Imgglrycard from './Imgglrycard'
import Fone from '../assets/pexels-cottonbro-6333724.jpg'
import Ftwo from '../assets/pexels-cottonbro-6333727.jpg'
import Fthree from '../assets/pexels-cottonbro-6334916.jpg'
import Ffive from '../assets/pexels-marc-mueller-380769.jpg'
import Fsix from '../assets/pexels-cadeau-maestro-1170412.jpg'

export default function Library() {
    return (
        <div>
            <Imgglrycard
            Glone={Fone}
            // Gltwo=""
            Glthree={Fthree}
            Glfive={Ffive}
            Gleight={Fsix}
            Glseven={Ftwo}/>
        </div>
    )
}

