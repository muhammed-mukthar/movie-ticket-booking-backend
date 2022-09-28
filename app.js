const express = require("express");
const app = express();
const userroute = require("./routes/user");
const adminroute = require("./routes/admin");
const mongoose = require("mongoose");
const session = require("express-session");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors=require('cors')


const dotenv = require("dotenv");

dotenv.config();


mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("database connected succesfully"))
.catch((err) => console.log(err));




const port = process.env.PORT || 4000;

const oneDay = 1000 * 60 * 60 * 24;





app.use(session({ secret: "secret", saveUninitialized: true, resave: false ,cookie:{maxAge:oneDay}}));
app.use(cors({
  origin:"*"
}))
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use(cookieParser());



app.use("/api/users", userroute);
app.use("/api/admin", adminroute);





// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
  
//   res.status(err.status || 500);
// res.json({
//   message: err.message,
//   error: err
// });

// });



app.listen(port, () => console.log("server hosted in localhost:4000"));
