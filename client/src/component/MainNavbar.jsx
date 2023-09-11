import React from "react";
import {FaCartArrowDown} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function MainNavbar ({cartitem}){
    const Navigate=useNavigate();

    

    return(
       <div className="Navbar">
       
        <nav>
            <Link to='/Home'id="logo"><h1>GoFood</h1></Link>
            <div className="buttons-div">
            <Link to='/Cart'><FaCartArrowDown/>({cartitem.length})</Link>
            </div>
            <ul>
            
            </ul>
            <div className="buttons-div">
            <button onClick={()=>Navigate('/')}>Logout</button>
            </div>
        </nav>
       </div>
    )
}

export default MainNavbar;