import React from "react";
function Cardone(props){
    return(
        <div className="cardone">
            <img src={props.imglink}/>
            <p>{props.something}</p>
        </div>
    )
}
export default Cardone ;