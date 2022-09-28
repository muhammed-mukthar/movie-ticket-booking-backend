const express = require("express");
const router = express.Router();
const ticketController=require('../controller/Booking_ticketController')
const movies=require('../model/movies')
router.post('/book-ticket',ticketController.book_Ticket)

router.get('/list-movies',async(req,res)=>{
    let name=req.params.name;

  let all_movies= await movies.find().sort({movie:1})
   
  
   res.status(200).json(all_movies)
})

 
module.exports = router;