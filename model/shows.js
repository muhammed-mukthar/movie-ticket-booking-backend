const mongoose=require('mongoose')

const showSchema=mongoose.Schema({
    Date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
    
    },
    movieId:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies'
    }   
})
module.exports=mongoose.model('shows',showSchema)