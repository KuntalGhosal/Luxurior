import React from "react";
function Cardone(props){
    return(
        <div className="cardone">
            <img src={props.imglink} alt=""/>
            <p className="somethingcardone">{props.something}</p>
        </div>
    )
}
export default Cardone ;