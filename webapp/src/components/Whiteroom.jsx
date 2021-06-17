import React from 'react'
import '../components/Header.css';
import Glone from "../assets/re (1).jpg";
import Gltwo from "../assets/residential.jpg";
import Glthree from "../assets/residential.jpg10.jpg";
import Glfive from "../assets/residential.jpg16.jpg";
import Glsix from "../assets/residential.jpg36.jpg";
import Glseven from "../assets/residential.jpg43.jpg";

export default function Whiteroom() {
  return (
    <div className="imgglry">
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={Glone}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          // style={{ borderWidth: 2, borderColor: 'black', }}
          />

          <img
            src={Gltwo}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={Glthree}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={Glfive}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={Glsix}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={Glseven}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
