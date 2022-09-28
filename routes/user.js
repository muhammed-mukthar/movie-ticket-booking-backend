const express = require("express");
const router = express.Router();
const ticketController=require('../controller/Booking_ticketController')
const movieController=require('../controller/movieController')
let theatre=require('../model/theaters')

router.post('/book-ticket',ticketController.book_Ticket)

router.get('/list-movies',movieController.display_movies)

router.get('/list-theatre',async(req,res)=>{
   
    let search='';
    if(req.query.search){
      search=req.query.search
    }
    console.log(search);
   
  let all_theatre= await theatre.find({$or:[
    {
    theater:{$regex:'.*'+search+'.*',$options:'i'} 
    }
  ]})
  res.json(all_theatre)
})

 
module.exports = router;