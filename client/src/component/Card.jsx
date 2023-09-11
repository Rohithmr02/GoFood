import React, { useEffect, useState } from "react";



function Card({handleAdditems,item}){ 
     
    
   
    return(
        <div className="Card">
          <div className="Card-image">
            <img src={item.image} />
            <p>{item.name}</p>
          </div>
          <div className="Card-qantity">
            <div className="price">
                <p>TotalPrice : {item.price}</p>
            </div>
            
          </div>
         <button className="Cart-button" onClick={()=>handleAdditems(item)}>Add to Cart</button>
        </div>
    )

}

export default Card;