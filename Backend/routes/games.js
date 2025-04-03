const express = require('express')
const Game = require('../model/gameSchema')

// express object is very big that is not needed here so we are using only routes in that big object
const gamesRoute = express.Router()


gamesRoute.get('/getgames', (req, res)=>{
    

    // to access the documents from collection
    Game.find().then((data)=>{

        res.json({
            ok: true,
            length: data.length,
            message:"Successfully Fetched the data",
            results: data
        })
    }).catch((error)=>{
        console.log(error);
        
        res.json({
            ok: false,
            message: "Something went wrong while fetching the data",
            results: null
        })
        
    })
}) //http://localhost:50000/getgames

module.exports = gamesRoute