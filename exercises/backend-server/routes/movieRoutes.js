const express = require('express')
const movieRouter = express.Router()
//vvv Whenever we want to interact with collection we have to use this model vvvvv
const Movie = require('../models/movie.js')


movieRouter.post("/", (req, res) => {
    const newMovie = new Movie(req.body)
    
    //This code down here will save to db
    newMovie.save((err, savedMovie) => {
        if(err){
            res.status(500)
            return res.send(err)
        }

        return res.status(201).send(savedMovie)
    })
})

movieRouter.get("/", (req, res) => {
    //.find will always send back an array / collection of data
    Movie.find((err, allTheMovies) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(allTheMovies)
    })
})

//:_id is going to represent a parameter so whatever number comes after the /movies/#### <<

//findOne will always give you a document just an object.
movieRouter.get("/:_id", (req, res) => {
    Movie.findOne({_id: req.params._id}, (err, foundMovie) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundMovie)
    })
})



module.exports = movieRouter