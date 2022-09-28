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
    },theatreId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'theaters'
    },
    seats:{
        type:Number,
        required:true
    },ticketPrice:{
        type:Number,
        required:true
    }   
})
module.exports=mongoose.model('shows',showSchema)