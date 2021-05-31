import React from 'react'
import Cardone from "../components/Cardone";
import Oone from "../assets/1_20210530_031340_0000.png"
import Otwo from "../assets/1_20210530_031512_0000.png"
import Othree from "../assets/1_20210530_031620_0000.png"
import Ofour from "../assets/1_20210530_031718_0000.png"
import Ofive from "../assets/1_20210530_031908_0000.png"
import Osix from "../assets/1_20210530_031952_0000.png"
import Oseven from "../assets/1_20210530_032300_0000.png"
import Oeight from "../assets/1_20210530_032618_0000.png"
import Onine from "../assets/1_20210530_032738_0000.png"
import Oten from "../assets/1_20210530_033009_0000.png"
import Oeleven from "../assets/0001-2085487267_20210530_025524_0000.png"
import Otwoelve from "../assets/0001-2085588228_20210530_025938_0000.png"
import Othirteen from "../assets/0001-2085701177_20210530_030413_0000.png"
import Ofourteen from "../assets/0001-2085787047_20210530_030756_0000.png"


function Ourservices() {
    return (
        <>
        <h5 id="allourservices" className="tranding">End-to-end intirior solutation</h5>
        <div className="allcard">
            <Cardone
            imglink={Oone}
            something="Moveable Furniture"
            />
            <Cardone
            imglink={Otwo}
            something="False ceiling"
            />
            <Cardone
            imglink={Othree}
            something="Light"
            />
            <Cardone
            imglink={Ofour}
            something="tv unit"
            />
            <Cardone
            imglink={Ofive}
            something="wallpaint"
            />
            <Cardone
            imglink={Osix}
            something="Bathroom"
            />
            <Cardone
            imglink={Oseven}
            something="Study tables"
            />
        </div>
        <div className="allcard">
            <Cardone
            imglink={Oeight}
            something="sofa"
            />
            <Cardone
            imglink={Onine}
            something="Furniture"
            />
            <Cardone
            imglink={Oten}
            something="Walpaper"
            />
            <Cardone
            imglink={Oeleven}
            something="Modular Kitchen"
            />
            <Cardone
            imglink={Otwoelve}
            something="Storage and wardrobe"
            />
            <Cardone
            imglink={Othirteen}
            something="Desktop Section"
            />
            <Cardone
            imglink={Ofourteen}
            something="short table"
            />
        </div>
        </>
    )
}

export default Ourservices;
