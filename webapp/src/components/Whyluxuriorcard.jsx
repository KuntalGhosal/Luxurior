import React from 'react'

export default function Whyluxuriorcard(props) {
    return (
        <div style={{position:"relative"},{textAlign:"center"}} className="whyall">
             <img style={{width:"100%"}} src={props.image} alt="image" />
             {/* <img className="whyimageone" style={{width:"100%"}} src={props.imageone} alt="image" /> */}

             <div className="whyfonts">
                 <h1 className="whyh1">{props.h1}</h1>
                 <p className="whyp">{props.p}</p>
                 <p className="whyp">{props.listone}</p>
                <p className="whyp">{props.listtwo}</p>
             </div>
        </div>
    )
}
