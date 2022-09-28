const express = require("express");
const router = express.Router();
const ticketController=require('../controller/Booking_ticketController')
const movieController=require('../controller/movieController')
const theatereController=require('../controller/theatreController')


/* ------------------------------- book ticket ------------------------------ */

router.post('/book-ticket',ticketController.book_Ticket)

/* ------------------------------- list movies ------------------------------ */

router.get('/list-movies',movieController.display_movies)

/* ------------------------------ list theatre ------------------------------ */

router.get('/list-theatre',theatereController.display_theatre)

router.get('/reschedule-booking/:id',ticketController.getalternateshows)


module.exports = router;