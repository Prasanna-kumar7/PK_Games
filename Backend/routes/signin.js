const express = require('express')
const Signup = require('../model/signupSchema')
const signinRoute = express.Router()

signinRoute.post("/signin", (req, res)=>{
    const {email, password} = req.body
    Signup.findOne({email: email}).then(user =>{
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("User Does not exist.")
        }
    })
})//http://localhost:50000/signin

module.exports = signinRoute