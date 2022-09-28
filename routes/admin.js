const express = require("express");
const router = express.Router();
const theatereController=require('../controller/theatreController') 
const movieController=require('../controller/movieController')
const showController=require('../controller/showController')



router.post('/add-theatre',theatereController.add_Theatre)

router.post('/add-movies',movieController.add_Movies)

router.post('/add-shows',showController.add_Show)


module.exports = router;
