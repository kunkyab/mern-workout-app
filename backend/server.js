const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose")

const workoutRoutes = require('./routes/workout');


const app = express();



app.use(express.json())


// app.use((req,res,next)=>{

//    console.log(req.path, req.method);
//    next()
// })


 
//ROUTE
app.use("/api/workouts",workoutRoutes)

//connect to db

mongoose.connect(process.env.MONGO_URI)

.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log("connected to db and server running on",process.env.PORT);
  })
})
.catch((error)=>{
console.error(error);
})

