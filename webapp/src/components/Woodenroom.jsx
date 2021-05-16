import React from 'react';
import Wlone from "../assets/residential.jpg13.jpg";
import Wltwo from "../assets/residential.jpg15.jpg";
import Wlthree from "../assets/residential.jpg18.jpg";
import Wlfive from "../assets/residential.jpg20.jpg";
import Wlsix from "../assets/residential.jpg21.jpg";
import Wlseven from "../assets/residential.jpg61.jpg";

export default function Woodenroom() {
    return (
        <div className="imgglry">
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={Wlone}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    /> 

    <img
      src={Wltwo}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Wlthree}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src={Wlfive}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Wlsix}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src={Wlseven}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>
</div>
        </div>
    )
}
