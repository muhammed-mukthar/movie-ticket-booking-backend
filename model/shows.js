const mongoose=require('mongoose')

const showSchema=mongoose.Schema({
    Date:{
        type:Date,
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
const movies=mongoose.model('shows',showSchema)