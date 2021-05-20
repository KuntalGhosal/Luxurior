import React from 'react';
import Imgglrycard from './Imgglrycard'
import Fone from '../assets/pexels-bruce-clark-3701434.jpg'
import Ftwo from '../assets/pexels-marc-mueller-380769.jpg'
import Fthree from '../assets/pexels-pew-nguyen-244134.jpg'
import Ffour from '../assets/pexels-proxyclick-visitor-management-system-2451616.jpg'
import Fsix from '../assets/pexels-henry-&-co-3214379.jpg'

export default function Office() {
    return (
        <div>
            <Imgglrycard
            Glone={Fone}
            Gltwo={Ftwo}
            Glthree={Fsix}
            Glfive=""
            Glsix={Fthree}
            Glseven={Ffour}/>
        </div>
    )
}
