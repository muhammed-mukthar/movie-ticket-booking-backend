const mongoose=require('mongoose')

const ticketSchema=mongoose.Schema({
    theaterId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'theaters'
    },
    showId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shows'
    },
    movieId:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies'
    },
    Date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    seats:{
        type:Number,
        required:true
    }
     
})
module.exports = mongoose.model('Book_tickets',ticketSchema)