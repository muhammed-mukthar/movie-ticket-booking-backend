const mongoose=require('mongoose')

const movieSchema=mongoose.Schema({
    movie:{
        type:String,
        required:true
    },
    genres:{
        type:String,
        required:true
    },
})
module.exports=mongoose.model('movies',movieSchema)