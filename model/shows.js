const mongoose=require('mongoose')

const showSchema=mongoose.Schema({
    Date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    movieId:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies'
    }
     
})
module.exports=mongoose.model('shows',showSchema)