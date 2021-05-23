import React from 'react';
import Gallery from 'react-grid-gallery';
import Ione from "../assets/aaron-huber-G7sE2S4Lab4-unsplash.jpg";
import Itwo from "../assets/residential.jpg5.jpg";
import Ithree from "../assets/residential.jpg6.jpg";
import Ifour from "../assets/residential.jpg7.jpg";
import Ifive from "../assets/residential.jpg8.jpg";
import Isix from "../assets/residential.jpg11.jpg";
import Iseven from "../assets/residential.jpg12.jpg";
import Ieight from "../assets/residential.jpg13.jpg";
import Inine from "../assets/residential.jpg43.jpg"
import Iten from "../assets/residential.jpg15.jpg";
import Ieleven from "../assets/residential.jpg17.jpg";
import Itwelve from "../assets/residential.jpg22.jpg";
import Ithirteen from "../assets/residential.jpg28.jpg";
import Ifourteen from "../assets/residential.jpg32.jpg";
import Ififteen from "../assets/residential.jpg34.jpg";
import Isixteen from "../assets/residential.jpg36.jpg";
import Iseventeen from "../assets/residential.jpg40.jpg";
import Ieightteen from "../assets/residential.jpg45.jpg";
import Inineteen from "../assets/residential.jpg46.jpg";
import Itwenty from "../assets/residential.jpg54.jpg";
// import { Lines } from 'react-preloaders';
const IMAGES =
[{
    src: Ione,
    thumbnail: Ione,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
    // caption: "Boats (Jeshu John - designerspics.com)" 
},
{
    src: Itwo,
    thumbnail: Itwo,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Ithree,
    thumbnail: Ithree,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Ifour,
    thumbnail: Ifour,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Ifive,
    thumbnail: Ifive,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},

{
        src: Isix,
        thumbnail: Isix,
        thumbnailWidth: 250,
        thumbnailHeight: 100,
        
},
{
    src: Iseven,
    thumbnail: Iseven,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Ieight,
    thumbnail: Ieight,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Inine,
    thumbnail: Inine,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Iten,
    thumbnail: Iten,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Ieleven,
    thumbnail: Ieleven,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Itwelve,
    thumbnail: Itwelve,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Ithirteen,
    thumbnail: Ithirteen,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Ifourteen,
    thumbnail: Ifourteen,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Ififteen,
    thumbnail: Ififteen,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Isixteen,
    thumbnail: Isixteen,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Iseventeen,
    thumbnail: Iseventeen,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Ieightteen,
    thumbnail: Ieightteen,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Inineteen,
    thumbnail: Inineteen,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
},
{
    src: Itwenty,
    thumbnail: Itwenty,
    thumbnailWidth: 250,
    thumbnailHeight: 100,
   
}]

export default function Designgallary() {
    return (
        <div className="dsignglry">
            <Gallery images={IMAGES}/>
            {/* <Lines /> */}
        </div>
    )
}

