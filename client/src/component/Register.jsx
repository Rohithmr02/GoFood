import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

function Register(){
    const[Name,setName]=useState("")
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("")
    const Navigate=useNavigate();
    
   
    
    const HandleSubmit=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3001/register',{Name,Email,Password})
        .then((res)=>{
           console.log(res);
           Navigate('/Login')
        }).catch(e=>console.log(e))
        
        
    }

    return(
        <div className="Login-container">
         <div className="Login-form">
         <h1>Register</h1>
         <form  action="POST" onSubmit={HandleSubmit}>
            <input
            type="text"
            placeholder="Enter your name"
            value={Name}
            onChange={(e)=>setName(e.target.value)}
            required
            />
            <input 
            type="email" 
            placeholder="Enter your email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Enter your password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
            <input type="submit" value="Register" id="Loginbutton" />
            <p>If you have account <Link to='/Login'>Login</Link></p>
         </form>
         
         </div>

        </div>
    )
}

export default Register;