const express = require("express");
const router = express.Router();

const ticketController=require('../controller/Booking_ticketController')

router.post('/book-ticket',ticketController.book_Ticket)

 
module.exports = router;