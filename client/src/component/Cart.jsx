import React from "react";
import {Link} from 'react-router-dom'
import MainNavbar from "./MainNavbar";
function Cart({cartitem,handleAdditems,handleRemoveProduct,fromvalues}){
    var price=cartitem.reduce((price,item)=>price+item.quantity * item.price,0)
    if(cartitem.length === 0){
        return(
            <div className="Empty-cart">
            <p>No item in cart...</p>
            <Link to="/Home">Back</Link>
            </div>
        )
    }

    const FromPrice=()=>{
        fromvalues(price)
    }
    return(
        <>
        <MainNavbar cartitem={cartitem}/>
         {cartitem.map((item,index)=>{
            return(
               
                <div className="cart-container" key={index}>
                    <div className="cart-overlay">

                    <div className="cart-content">
                        <div className="cart-image">
                        <img src={item.image}  />
                        </div>
                        <div className="product-name">
                            <p>{item.name}</p>
                            
                        </div>
                        <div className="cart-button">
                            <button onClick={()=>handleAdditems(item)}>+</button>
                            <button onClick={()=>handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className="cart-price">
                          <p>Price : {item.quantity}*{item.price}</p>
                        </div>
                    </div>
                    </div>
                   
                
         
                </div>
                
                
            )
         })}
         <div className="totalprice">
         <Link to='/Form'><button onClick={FromPrice}>PlaceOrder : {price.toFixed(2)}</button></Link>
         
         </div>
        </>
    )
}

export default Cart;