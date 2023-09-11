
import './App.css';
import React,{useState,useEffect} from 'react';
import Home from './component/Home';
import Product from './component/Product';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './component/Login';
import Cart from './component/Cart'
import Register from './component/Register'
import About from './component/About'
import Form from './component/Form';
import MainHome from './component/MainHome';
import Contact from './component/Contact';
function App() {
  const[Price,setPrice]=useState('')
  const [cartitem,setCartitem]=useState([]);

  const handleAdditems = (product) =>{
    const productExist=cartitem.find((item)=>item.id===product.id)
    if(productExist){
     setCartitem(cartitem.map((item)=>item.id===product.id?
     {...productExist,quantity:productExist.quantity+1}:item
     ))
    }
    else{
     setCartitem([...cartitem,{...product,quantity:1}])
    }
 }
  const handleRemoveProduct=(product)=>{
    const productExist = cartitem.find((item)=>item.id === product.id);
    if(productExist.quantity === 1){
      setCartitem(cartitem.filter((item)=>item.id !== product.id ))
    }else{
      setCartitem(
        cartitem.map((item)=>
         item.id === product.id
         ? {...productExist,quantity:productExist.quantity-1}
         :item
        )
      )
    }
  }
  const fromvalues=(price)=>{
      setPrice(price)
  }

  
  return (
   
   
    
    <Router>
      
     
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Product' element={<Product handleAdditems={handleAdditems} />}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Cart' element={<Cart cartitem={cartitem} handleAdditems={handleAdditems} handleRemoveProduct={handleRemoveProduct} fromvalues={fromvalues} />}></Route>
        <Route path='/Form' element={<Form Price={Price} cartitem={cartitem}/>}></Route>
        <Route path='/Home'  element={<MainHome cartitem={cartitem} handleAdditems={handleAdditems}/>}></Route>
        <Route path='/About' element={<About cartitem={cartitem}/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
