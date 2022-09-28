
const ticket=require('../model/ticket')
const shows=require('../model/shows')
var ObjectId = require("mongoose").Types.ObjectId;
exports.book_Ticket=async(req,res)=>{
    try{
        let { inserted_theaterId, inserted_showId,inserted_movieId,inserted_seat} =req.body;
        let show_details=await shows.findOne({_id:ObjectId(inserted_showId)}) 
      
        if(show_details){
            let {seats}=show_details
            if(seats<inserted_seat){
                res.json('invalid number of seats')
            }else{
                let new_ticket=new ticket({
                    theaterId:ObjectId(inserted_theaterId),
                    showId:ObjectId(inserted_showId),
                    movieId:ObjectId(inserted_movieId),
                    seats:inserted_seat
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