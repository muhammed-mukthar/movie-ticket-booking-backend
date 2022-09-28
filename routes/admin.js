const express = require("express");
const router = express.Router();
const theatereController=require('../controller/theatreController') 
const movieController=require('../controller/movieController')
const showController=require('../controller/showController')

/* ------------------------------- add theatre ------------------------------ */

router.post('/add-theatre',theatereController.add_Theatre)

/* ------------------------------- add movies ------------------------------- */


router.post('/add-movies',movieController.add_Movies)

/* -------------------------------- add show -------------------------------- */

router.post('/add-shows',showController.add_Show)


module.exports = router;
