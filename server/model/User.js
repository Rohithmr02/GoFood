const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const User = new Schema({
    Name:{
        type:String,
        require:true,

    },
    Email:{
        type:String,
        unique:true,
        require:true
    },
    Password:{
        type:String,
        require:true
    }

},
{
    timestamps:true
}

)


const Users= mongoose.model('registerdata',User);

module.exports = Users;