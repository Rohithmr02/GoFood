const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Payment = new Schema({
   
    name:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true
    },
    PinCode:{
        type:Number,
        require:true
    },
    street:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    MobNumber:{
        type:Number,
        require:true,
        unique:true
    },
    AlternateNumber:{
        type:Number,
        require:true,
        unique:true
    },
    Price:{
        type:Number,
        require:true
    },
}
,{
    timestamps:true
}
)


const PaymentMethod= mongoose.model('PaymentMethod',Payment);

module.exports = PaymentMethod;