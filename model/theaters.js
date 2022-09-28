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
const movies=mongoose.model('theaters',theatersSchema)