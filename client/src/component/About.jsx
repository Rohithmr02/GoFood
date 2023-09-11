import React from "react";
import MainNavbar from "./MainNavbar";

function About(){
   var Burgerimg='https://t4.ftcdn.net/jpg/05/85/29/13/360_F_585291338_0J8Q8vYbKDCu8yqqwAO8PsQZ4ESP2zd8.jpg'
   var Shwarma='https://s2.dmcdn.net/v/PYid_1SThx9ugY7UM/x1080'
   var gulam='https://media.istockphoto.com/id/521803129/photo/gulab-jamun-11.jpg?s=612x612&w=0&k=20&c=wyJaXY7Uu0hMBCXkcTDRaujSKN6Rp9roJeKDvF6CfHI=';
   var rasagulla='https://t4.ftcdn.net/jpg/02/23/02/33/360_F_223023382_DkOOzyFXfzOpHDXVSgGb2xmS1uZOkzNn.jpg';
   return (
        
        <div className="About-container">
            
         <div className="Aboutcontent">
           <div className="Aboutcontent-image">
           <img src={Burgerimg} />
           <img src={Shwarma} />
           <img src={gulam} />
           <img src={rasagulla}  />
          </div> 
          <div className="Aboutcontent-para">
          <h1>About us</h1>
          <p>Welcome to our Gofood website, where culinary delights are just a click away!
             Whether you're craving the comforting warmth of a homemade meal or seeking an 
             adventurous culinary experience, our platform is your gateway to a world of gastronomic
             pleasures. Browse through a diverse menu featuring an array of cuisines, from traditional
             favorites to exotic flavors. With our user-friendly interface, placing an order is a breeze, 
             ensuring that your cravings are satisfied with convenience and ease. From the sizzle of a perfectly
             grilled steak to the aromatic spices of international dishes, we bring the world's flavors to your 
             doorstep. Join us on a culinary journey where every dish is an adventure, and every bite tells a
             delicious story. Explore, order, and savor – it's all just a few clicks away! Our user-friendly
             platform makes ordering a breeze, allowing you to customize your selections, specify dietary
             preferences, and even track your delivery in real-time. Plus, our commitment to food safety
             and hygiene guarantees that every bite you take is not just delicious but also safe to enjoy.
             So, whether you're a foodie looking to explore new flavors or simply seeking the comfort of your 
             favorite dishes, our food order website is your gateway to a culinary adventure. Discover, order,
              and experience the joy of exceptional dining, delivered to your doorstep.</p>
          </div>
         </div>
        </div>
    )
}

export default About;