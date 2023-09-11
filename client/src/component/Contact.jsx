import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
function Contact(){
    const Navigate=useNavigate();
    const[Name,setName]=useState("")
    const[Email,setEmail]=useState("")
    const[MobNumber,setMobNumber]=useState("")
    const[Message,setMessage]=useState("")

    
    const handlesubmit=async(e)=>{
        e.preventDefault();
        await Axios.post('http://localhost:3001/ContactDetails',{Name,Email,MobNumber,Message})
        .then((res)=>{
          if(res.data === 'Success'){
            alert("Successfully submitted");
            window.location.reload();
            Navigate('/Home');
          }else{
            alert("Enter correct details")
          }
        })
    }

    return(
        <div className="Contact-container">
            <div className="Contact-content">
                <div className="contact-conclusion">
                    <h1>contact us</h1>
                    <p>We value your feedback and are here to assist you in every way possible. 
                        If you have any questions, concerns, or suggestions, please don't hesitate
                         to get in touch with us. Our dedicated customer support team is available
                          around the clock to ensure your experience with our food order website is 
                          smooth and enjoyable.You can reach us through various channels, including 
                          phone, email, or our online chat support. Your inquiries will be met with 
                          prompt and friendly assistance. Whether it's a special request for your order,
                           assistance with navigating our website, or any other inquiry, we're committed 
                           to providing you with the support you need.</p>
                </div>
          <form action="POST" onSubmit={handlesubmit}>
            <h1>Message Me</h1>
            <div className="form-field">
                <label htmlFor="Name">Name</label>
                <input id="Name" type="text"
                placeholder="Enter your name"
                 onChange={(e)=>setName(e.target.value)}
                 value={Name}
                 required
                />
            </div>
            <div className="form-field">
                <label htmlFor="Email">Email</label>
                <input id="Email" type="email" 
                placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)}
                value={Email}
                required
                />
            </div>
            <div className="form-field">
                <label htmlFor="mobilenumber">Phone Number</label>
                <input id="mobilenumber" type="number"
                placeholder="Enter your phone number"
                onChange={(e)=>setMobNumber(e.target.value)}
                value={MobNumber}
                required
                />
            </div>
            <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" cols='10' rows='10'
                 onChange={(e)=>setMessage(e.target.value)}
                 placeholder="Send a message to us"
                 value={Message}
                 required
                ></textarea>
            </div>
             <button>Submit</button>
          </form>
          </div>
        </div>
    )
}


export default Contact;