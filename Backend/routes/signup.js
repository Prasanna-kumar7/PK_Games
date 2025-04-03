const express = require('express')
const Signup = require('../model/signupSchema')
const userRoute = express.Router()

userRoute.post("/signup", async (req, res)=>{
    const newUser = req.body
    let user = new Signup(newUser);

    try {
        
        await user.save()

        res.send({
            ok: true,
            result:"User created Successfully",
        })
    } catch (error) {
        console.log(error);
        
        res.send({
            ok: false,
            result:"Something went wrong",
        })
    }
})//http://localhost:50000/signup

module.exports = userRoute