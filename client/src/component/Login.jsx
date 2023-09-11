import React,{ useState } from "react";
import { Link } from "react-router-dom";
import {AiFillGoogleCircle} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

function Login(){
    
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("")
    const Navigate=useNavigate();
    const getdata=async()=>{
      await Axios.get('http://localhost:3001/Userdetalis',{Email})
      .then((result)=>{
       console.log(result.data);
      }).catch(e=>console.log(e))
  }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3001/Login',{Email,Password})
        .then((result)=>{
          if(result.data === "success"){
            getdata();
            Navigate('/Home')
            
          }else if(result.data === "Password is incorrect"){
            alert("Password is incorrect")
          }else{
            alert("No record found");
          }
        }).catch(e=>console.log(e))
        
    }

    return(
        <div className="Login-container">
            
         <div className="Login-form">
         <h1>Login</h1>
         <form action="POST" onSubmit={HandleSubmit}>
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
            <input type="submit" value="Login" id="Loginbutton" />
            <p>If you not have account <Link to='/Register'>Register</Link></p>
            <p>or login with</p>
         <div className="icons">
            <Link><AiFillGoogleCircle/></Link>
            <Link id="facebook"><FaFacebook/></Link>
            <Link><AiFillTwitterCircle/></Link>
         </div>
         </form>
         </div>
        </div>
    )
}

export default Login;