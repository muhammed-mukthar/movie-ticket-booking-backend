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
    seats:{
        type:Number,
        required:true
    }
     
})
module.exports = mongoose.model('Book_tickets',ticketSchema)