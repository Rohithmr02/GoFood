import React,{useEffect,useState} from "react";
import Card from "./Card";
import Axios from 'axios';
import Cart from "./Cart";

function Product({handleAdditems}){
   
    const [data,setData]=useState([]);
    const getdata=()=>{
        Axios.get('http://localhost:3001/products/data')
        .then((res)=>{
          setData(res.data);
        })
    }
      useEffect(()=>{
        getdata();
      },[])
      
    return(
        
        <div className="Product">
            <h1>Food items</h1>
            <p>Order your favorite food...</p>
            <div className="products">
                {data.map((item,index)=>{
                    return(
                        <div key={index}>
                        <Card handleAdditems={handleAdditems} item={item}/>
                        </div>
                    )
                })}

            </div>
        
        </div>
    )
}

export default Product;