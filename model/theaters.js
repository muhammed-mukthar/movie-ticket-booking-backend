const mongoose=require('mongoose')

const theatersSchema=mongoose.Schema({
    theater:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    State:{ 
        type:String,
        required:true
    }
     
})
module.exports=mongoose.model('theaters',theatersSchema)