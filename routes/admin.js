const express = require("express");
const router = express.Router();
const theatereController=require('../controller/theatreController') 
const movieController=require('../controller/movieController')
const shows=require('../model/shows');
var ObjectId = require("mongoose").Types.ObjectId;



router.post('/add-theatre',theatereController.add_Theatre)

router.post('/add-movies',movieController.add_Movies)

router.post('/add-shows',async(req,res)=>{
    try{
        let { inserted_Date, inserted_time,inserted_movieId} =req.body;
        let new_show=new shows({
            Date:inserted_Date,
            time:inserted_time,
           movieId:ObjectId(inserted_movieId)     
        })
        await new_show.save()
        res.json('New show added ')
      }catch(err){
        res.json(err,'error happened while addding theatre')
    }
})




module.exports = router;
