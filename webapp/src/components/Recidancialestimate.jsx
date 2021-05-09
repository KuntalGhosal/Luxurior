import React from 'react';
import '../components/Header.css';

export default function Recidancialestimate() {
    return (
        <>
          <div className="resdiv">Recidancial</div> 
          <div className="totalblock"> 
          <div className="resa">
          <div className="resbtn" >1 BHK</div>
          <div className="resbtn" >2 BHK</div>
          <div className="resbtn" >3 BHK</div>
          <div className="resbtn" >4 BHK</div>
          </div>
          <div className="resb">
            <div className="resbtn" >Luxury</div>
            <div className="resbtn" >Semi Luxury</div>
            <div className="resbtn" >Premium</div>
            <div className="resbtn" >Rent Out</div>
          </div>
          </div>
        </>
    )
}
