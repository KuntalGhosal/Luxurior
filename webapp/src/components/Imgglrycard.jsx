import React from 'react'

export default function Imgglrycard(props) {
    return (
        <div className="imgglry">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={props.Glone}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          // style={{ borderWidth: 2, borderColor: 'black', }}
          />

          <img
            src={props.Gltwo}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div  class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={props.Glthree}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={props.Glfive}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
          <img
            src={props.Gleight}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={props.Glsix}
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={props.Glseven} 
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
      </div>
    </div>
    )
}
