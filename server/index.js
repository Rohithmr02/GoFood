const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const Users=require('./model/User');
const app=express();
const port=3001;
const Contacts=require('./model/Contact')
const Products=require('./model/product')
const dbjson=require('./db.json');
const PaymentMethod=require('./model/Payment')

mongoose.connect('mongodb://localhost:27017/Gofood')
.then(()=>{
    console.log("db is connected");
})

app.use(cors());

app.use(express.json());
app.get('/',(req,res)=>{
    Users.find()
    .then((result)=>res.json(result))
})

app.get('/products/data', async (req,res)=>{
    try{
        await Products.find()
        .then((result)=>{
            res.send(result)
        }).catch(e=>console.log(e))
    }
    catch(err){
        console.log(err);
    }

})

app.post('/products',async(req,res)=>{
    Products.insertMany(dbjson)
    .then((result)=>{
        res.send(result)
        console.log("success")
    }).catch(e=>console.log(e))
})
app.post('/register',(req,res)=>{
    Users.create(req.body)
    .then(res =>res.json(res))
   .catch(err =>res.json(err))
})
app.post('/ContactDetails',async(req,res)=>{
    await Contacts.create(req.body)
     .then(()=>{
         res.json("Success")
     }).catch(e=>res.json(e))
 })
app.post('/paymentdetails',async(req,res)=>{
   PaymentMethod.create(req.body)
   .then(res=>res.json(res))
   .catch(e=>res.json(e))
})
app.post('/Login',(req,res)=>{
    const{Email,Password} = req.body;
    Users.findOne({Email:Email})
    .then(user=>{
        if(user){
            if(user.Password === Password){
                res.json("success");
               
            }else{
                res.json("Password is incorrect")
            }
        }else{
            res.json("No record");
        }
    })
})
app.get('/Userdetalis',async(req,res)=>{
    const{Email}=req.body;
    await Users.findOne({Email:Email})
     .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.json("no user")
        }
     }).catch(e=>console.log(e))
})




app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})