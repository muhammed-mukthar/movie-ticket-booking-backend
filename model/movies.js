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
const movies=mongoose.model('movies',movieSchema)