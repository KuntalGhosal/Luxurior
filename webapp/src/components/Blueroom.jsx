import React from 'react';
import "../components/Header.css";
import Blone from "../assets/residential.jpg11.jpg";
import Bltwo from "../assets/residential.jpg12 (1).jpg";
import Blthree from "../assets/residential.jpg14.jpg";
import Blfive from "../assets/residential.jpg25.jpg";
import Blsix from "../assets/residential.jpg27.jpg";
import Blseven from "../assets/residential.jpg28.jpg";

export default function Blueroom() {
    return (
        <div className="imgglry">
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={Blone}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    /> 

    <img
      src={Bltwo}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Blthree}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src={Blfive}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Blsix}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src={Blseven}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>
</div>
        </div>
    )
}
