import React, { useEffect } from 'react';
import '../components/Header.css'
import Cardone from "./Cardone";
import Wlone from "../assets/0001-2086643731_20210530_034509_0000.png"
import Wltwo from "../assets/0001-2086675175_20210530_034633_0000.png"
import Wlthree from "../assets/].png"
import Wlfour from "../assets/0001-2086760709_20210530_035012_0000.png"
import Wlfive from "../assets/0001-2086842157_20210530_035351_0000.png"
import Cardtwo from "./Cardtwo";
import Bone from "../assets/armin-djuhic-mcL2f-J74GY-unsplash.jpg";
import Btwo from "../assets/aaina-sharma-J8iOJZEPFQ4-unsplash.jpg";
import Bthree from "../assets/connor-wang-MNz7IGrcEl0-unsplash.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Aone from "../assets/pexels-jonathan-borba-3285193.jpg"
import Atwo from "../assets/pexels-pew-nguyen-244134.jpg"
import Athree from "../assets/residential.jpg45.jpg"
import Afour from "../assets/residential.jpg25.jpg"
import Cone from "../assets/naomi-hebert-MP0bgaS_d1c-unsplash (1).jpg"
import Ctwo from "../assets/residential.jpg6.jpg"
import Cthree from "../assets/residential.jpg52.jpg"
import Cfour from "../assets/residential.jpg54.jpg"
import Done from "../assets/residential.jpg46.jpg"
import Designerbathroom from "../components/Designerbathroom"

export default function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="main-container">
        <div className="backimg">
          <div className="pandspan">
          </div>
        </div>
        <div data-aos="fade-down" className="aftbackimgtwo">Why Luxurior?</div>
        <div data-aos="fade-right" className="allcard">
          <Cardone
            imglink={Wlone}
            something="on time delivery"
          />
          <Cardone
            imglink={Wltwo}
            something="customar satisfaction"
          />
          <Cardone
            imglink={Wlthree}
            something="best designs"
          />
        </div>
        <div data-aos="fade-left" className="allcard">
          <Cardone
            imglink={Wlfour}
            something="warranty"
          />
          <Cardone
            imglink={Wlfive}
            something="support"
          />
        </div>
        <div data-aos="fade-up" className="afterbackimg">
          <p className="a">Complete interior design service</p>
          <p className="b">Luxurior is a luxury interior design studio that creates timeless interiors individually tailored to your lifestyle, personal tastes and the unique character of your home. From the initial consultation to visual concepts and completion our highly skilled design team, led by Founder and Creative Director, meticulously plan and design every detail to finesse your home to perfection.
          As a boutique interior design studio based in Bangalore and Kolkata, exemplary service and the personal involvement of hand selected team set new standards of luxury and refinement. Whether you are looking for a Residential or Comarcial, customised lighting or a complete home renovation, trust Luxurior to exceed every expectation.
       Luxurior is a long established independent interior design and architectural design company. We have earned a first-class reputation for service, precision interior design and project management expertise that works around the lifestyle demands of you, our client.</p>
        </div>
        <h5 className="tranding">Designer bathrooms</h5>
        <div data-aos="fade-up" className="allcardtwo">
          <Cardtwo
            imglinktwo={Done}
            // heading="Comarcial"
            watch="/Designerbathroom"
          />
          <Cardtwo
            imglinktwo={Atwo}
            // heading="residencial"
            watch="/Designerbathroom"
          />
          <Cardtwo
            imglinktwo={Athree}
            // heading="news letter"
            watch="/Designerbathroom"
          />
          <Cardtwo
            imglinktwo={Afour}
            // heading="news letter"
            watch="/Designerbathroom"
          />
        </div>
        <h5 className="tranding">Modular Kitchen</h5>
        <div data-aos="fade-up" className="allcardtwo">
          <Cardtwo
            imglinktwo={Cone}
            // heading="Comarcial"
            // watch="/comarcialimages"
          />
          <Cardtwo
            imglinktwo={Ctwo}
            // heading="residencial"
            // watch="/recidancialimages"
          />
          <Cardtwo
            imglinktwo={Cthree}
            // heading="news letter"
            // watch=""
          />
          <Cardtwo
            imglinktwo={Cfour}
            // heading="news letter"
            // watch=""
          />
        </div>
        <h5 className="tranding">Designer Bedroom</h5>
        <div data-aos="fade-up" className="allcardtwo">
          <Cardtwo
            imglinktwo={Cone}
            // heading="Comarcial"
            // watch="/comarcialimages"
          />
          <Cardtwo
            imglinktwo={Ctwo}
            // heading="residencial"
            // watch="/recidancialimages"
          />
          <Cardtwo
            imglinktwo={Cthree}
            // heading="news letter"
            // watch=""
          />
          <Cardtwo
            imglinktwo={Cfour}
            // heading="news letter"
            // watch=""
          />
        </div>
        <div data-aos="fade-right" className="backimgone"></div>
        <div data-aos="fade-down" className="afterbackimg">
          <p className="a">Bespoke Joinery</p>
          <p className="b">We offer and include high end bespoke joinery designed by Luxurior to meet our clients requirements and needs. This includes smaller pieces such as coffee tables, side boards and radiator covers to larger pieces such as wardrobes, walk in wardrobes, bookcases, media units, dining tables, bathrooms and complete kitchens... tailored and made to fit the space perfectly.we make you Residential space comfort and elegant.</p>
        </div>
        <div data-aos="fade-down" className="aftbackimgtwo">Why Choose Us?</div>
        <div data-aos="fade-up" className="allcardtwo">
        <Cardone
            imglink={Wlone}
            something="on time delivery"
          />
          <Cardone
            imglink={Wltwo}
            something="customar satisfaction"
          />
          <Cardone
            imglink={Wlthree}
            something="best designs"
          />
        </div>
        <div data-aos="fade-left" className="backimgtwo"></div>
        <div data-aos="fade-down" className="aftcard">
          Designs by Luxurior
</div>
        <div data-aos="fade-up" className="allcardtwo">
          <Cardtwo
            imglinktwo={Bone}
            heading="Comarcial"
            watch="/comarcialimages"
          />
          <Cardtwo
            imglinktwo={Btwo}
            heading="residencial"
            watch="/recidancialimages"
          />
          <Cardtwo
            imglinktwo={Bthree}
            heading="news letter"
            watch=""
          />
        </div>
      </div>
    </>
  );
}

