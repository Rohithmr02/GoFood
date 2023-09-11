import React, { useState } from "react";
import Axios from "axios";
import MainNavbar from "./MainNavbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Form({Price,cartitem}){
    const Navigate=useNavigate();
    const payment=['cash on delivery']
    const[name,setName]=useState("");
    const[address,setAddress]=useState("");
    const[PinCode,setPinCode]=useState("");
    const[street,setStreet]=useState("");
    const[city,setCity]=useState("");
    const[MobNumber,setMobNumber]=useState("");
    const[AlternateNumber,setAlternateNumber]=useState(""); 
    const handleformsubmit=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3001/paymentdetails',{name,address,PinCode,street,city,Price,MobNumber,AlternateNumber})
        .then((res)=>{
           console.log(res);
           alert("Payment Successfull..") 
           Navigate('/Home')

        }).catch(e=>console.log(e)) 
    }
    
    return(
        <>
        <MainNavbar cartitem={cartitem}/>
        <div className="Order-form">
            
            <h1>PaymentFrom</h1>
         <form action="" onSubmit={handleformsubmit}>
            <input 
            type="text"
            placeholder="Enter Your Name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            required
            />
            <div className="address">
                <div className="address-place">
                    <input type="text"
                     placeholder="Enter your address"
                     onChange={(e)=>setAddress(e.target.value)}
                     value={address}
                     required
                    />
                    <input type="Number" 
                     placeholder="Pin-code"
                     onChange={(e)=>setPinCode(e.target.value)}
                     value={PinCode}
                     required
                    />
                </div>
                <div className="street-city">
                   <input type="text"
                    placeholder="Street"
                    onChange={(e)=>setStreet(e.target.value)}
                    value={street}
                    required
                   />
                   <input type="text"
                    placeholder="City"
                    onChange={(e)=>setCity(e.target.value)}
                    value={city}
                    required
                   />
                </div>
            </div>
           <input type="Number"
            placeholder={` Rs: ${Price}`}
            value={` Rs: ${Price}`}
            readOnly
           />
           <input type="tel" 
            placeholder="Enter your Number"
            onChange={(e)=>setMobNumber(e.target.value)}
            value={MobNumber}
            required
           />
           <input type="tel" 
            placeholder="Alternate Number"
            onChange={(e)=>setAlternateNumber(e.target.value)}
            value={AlternateNumber}
            required
           />
           <select  >
            {payment.map((item,index)=>{
                return(
                    
                    <option  key={index} value={item}>{item}</option>
                 
                )
            })}
            
           </select>
           <input type="submit"  value='Pay' id="pay-button"/>
           
         </form>
        
        </div>
        </>
    )
}

export default Form;