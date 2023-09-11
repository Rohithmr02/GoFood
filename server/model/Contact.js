const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const contact = new Schema({
   
    Name:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    MobNumber:{
        type:Number,
        require:true,
        unique:true
    },
    Message:{
        type:String,
        require:true
    }
}
,{
    timestamps:true
}
)


const Contacts= mongoose.model('Contactdetails',contact);

module.exports = Contacts;