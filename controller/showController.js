
const shows=require('../model/shows');
var ObjectId = require("mongoose").Types.ObjectId;


exports.add_Show=async(req,res)=>{
    try{
        let { inserted_Date, inserted_time,inserted_movieId ,seats_available,inserted_theatreId} =req.body;
        let new_show=new shows({
            Date:inserted_Date,
            time:inserted_time,
            seats:seats_available,
           movieId:ObjectId(inserted_movieId),
           theatreId:ObjectId(inserted_theatreId)     
        })
        await new_show.save()
        res.json('New show added ')
      }catch(err){
        res.json(err,'error happened while addding theatre')
    }
}