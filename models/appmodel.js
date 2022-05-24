const mongoose= require('mongoose')
const { required } = require('nodemon/lib/config')
const data=mongoose.Schema({
    Image:{
type:"string"
    },
    Name:{
        type:"string",
        required:true

    },
    Email:{
        type:"string",
        required:true
    },
    Phone:{
        type:"string"
    },
    Country:{type:"string"

    },
    State:{
        type:"string"
    },
    City:{type:"string"

    },Address:{
        type:"string"
    },

Postcode:{
    type:"string"
},

})

module.exports=mongoose.model('userdata',data);