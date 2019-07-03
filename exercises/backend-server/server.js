const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Global middleware
app.use(express.json()) // req.body


mongoose.connect(
    "mongodb://localhost:27017/kipsdb", 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
    console.log("Connected to the DB")
})

//Define what data my website needs to store => Schema aka Mongoose models
//How am I or the user going to interact with that data => Routes with endpoints

//Plural = Collection of Data
//Singular = Document
app.use("/movies", require("./routes/movieRoutes.js"))








app.listen(6000, () => console.log("Server is ruinning on port 6000")) 