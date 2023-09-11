const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Product = new Schema({
   
        id:Number,
        name:String,
        category:String,
        price:Number,
        image:String
    
   


})


const Products= mongoose.model('Products',Product);

module.exports = Products;