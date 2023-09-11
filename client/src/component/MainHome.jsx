import React, { useEffect, useState } from "react";
import { FiArrowLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';   
import Product from "./Product";
import MainNavbar from "./MainNavbar";
import About from "./About";
import Contact from "./Contact";



function MainHome({handleAdditems,cartitem}){
    var [currentImage,setCurrentImage]=useState(0);
    var img='https://wallpaperaccess.com/full/4883006.jpg'
    var img1='https://cdn.pixabay.com/photo/2020/03/29/22/36/food-4982513_640.jpg'
    var img2='https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg'
    
    let images=[img,img1,img2]

    useEffect(()=>{
        var interval=setInterval(() => {
        setCurrentImage(count=>count === images.length-1?0:count+1);
        }, 2000);

        return()=>clearInterval(interval)
    },[images])
    
    const Leftarrow =()=>{
        setCurrentImage(count=>count === 0 ? images.length-1:count-1);
    }
    const Rightarrow=()=>{
          setCurrentImage(count=>count ===images.length-1?0:count+1);
    }
    return (
        <>
        <MainNavbar cartitem={cartitem}/>
        <div className="home">
            <div className="warp">
                <div className="arrow">
                    <div className="left-arrow">
                    <button onClick={Leftarrow}><FiArrowLeft/></button>
                    </div>
                    <div className="search">
                        <input 
                        type="text"
                        placeholder="Search your Recipe"
                        />
                        <button>Search</button>
                    </div>
                    <div className="right-arrow">
                     <button onClick={Rightarrow}><FiArrowRight/></button>
                    </div>
                </div>
            </div>
           <div className="images">
            <img src={images[currentImage]} alt="" />
           </div>
           <About/>
           <Product handleAdditems={handleAdditems}/>
           <Contact/>
           <footer>
            <h3>© 2023 rohithmr.ee20@bitsathy.ac.in</h3>
           </footer>
        </div>
        </>
    )

}

export default MainHome;