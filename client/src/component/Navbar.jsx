import React from "react";
import {FaCartArrowDown} from 'react-icons/fa'
import { Link } from "react-router-dom";

function Navbar (){
    
    return(
       <div className="Navbar">
       
        <nav>
            <h1>GoFood</h1>
            <ul>
                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Product'>Product</Link></li>
                <li><Link to='/Contact'>Contact</Link></li> */}
            </ul>
            <div className="buttons-div">
            <Link to='/Register'><button>Register</button></Link>
            </div>
        </nav>
       </div>
    )
}

export default Navbar