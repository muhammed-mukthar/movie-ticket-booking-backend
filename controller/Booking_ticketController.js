
const ticket=require('../model/ticket')
const shows=require('../model/shows')
var ObjectId = require("mongoose").Types.ObjectId;

/* ------------------------------- book ticket ------------------------------ */

exports.book_Ticket=async(req,res)=>{
    try{
        let {  inserted_showId,inserted_seat} =req.body;
        console.log(inserted_showId);
        let show_details=await shows.findOne({_id:ObjectId(inserted_showId)}) 
      
        if(show_details){
            let {seats,ticketPrice}=show_details
            let ticket_price=seats * ticketPrice;
            if(seats<inserted_seat){
                res.json('invalid number of seats')
            }else{
                let new_ticket=new ticket({
                    showId:ObjectId(inserted_showId),
                    seats:inserted_seat,
                    price:ticket_price
                })
                await new_ticket.save()
                await shows.updateOne({_id:ObjectId(inserted_showId)},{$inc:{
                    seats:-inserted_seat
                }})
                res.json('ticket booked')
            }
        }else{
            res.json('invalid show')
        }
    }catch(err){
        res.json(err,'error happened while booking ticket')
    }
}

/* -------------------- select shows that can be changed with the ticket ------------------- */

exports.getalternateshows=async(req,res)=>{
    try{
        let changing_TickectId=req.params.id;
        let ticket_details=await ticket.findOne({_id:ObjectId(changing_TickectId)})
        let {showId}=ticket_details
        let changing_show=await shows.findOne({_id:ObjectId(showId)})
        let {theatreId}=changing_show
        //selecting other shows available at the theatre
        let available_shows=await shows.find({theatreId:ObjectId(theatreId)})
        res.json(available_shows)
    }catch(err){
        res.status(500).json(500)
    }

exports.reschedule_booking({

})   

}