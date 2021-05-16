import React from 'react';
import "./Header.css";
import Olone from "../assets/residential.jpg56.jpg";
import Oltwo from "../assets/residential.jpg53.jpg";
import Olthree from "../assets/residential.jpg57.jpg";
import Olfive from "../assets/residential.jpg41.jpg";
import Olsix from "../assets/residential.jpg59.jpg";
import Olseven from "../assets/residential.jpg40.jpg";

export default function Likeoldroom() {
    return (
        <div className="imgglry">
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={Olone}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    /> 

    <img
      src={Oltwo}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">

    <img
      src={Olfive}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Olsix}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src={Olseven}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>
</div>
        </div>
    )
}

