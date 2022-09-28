const mongoose=require('mongoose')

const ticketSchema=mongoose.Schema({
    showId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shows'
    },
    seats:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('Book_tickets',ticketSchema)