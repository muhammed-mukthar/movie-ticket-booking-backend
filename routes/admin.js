const express = require("express");
const router = express.Router();
const theatereController=require('../controller/theatreController') 
const theaters=require('../model/theaters')
  


router.post('/add-theatre',async(req,res)=>{
    try{
        let { theater, city,state} =req.body;
        let New_Theatre=new theaters({
            theater:theater,
            City:city,
            State:state
        })
        await New_Theatre.save()
        res.json('theatre added succesfully')
    }catch(err){
        res.json(err,'error happened while addding theatre')
    }
})



module.exports = router;
