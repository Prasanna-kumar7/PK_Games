const express = require('express')
const cors = require('cors')
const gamesRoute = require('./routes/games')
const signupRoute = require('./routes/signup')
const createConnection = require("./config/connection")

// Environment variable configuration
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })
const port = process.env.PORT;

// const port = 50000
const app = express()

// Configuration
app.use(cors())
app.use(express.json())



app.use("/api/games", gamesRoute)
// http://localhost:50000/api/games/getgames

createConnection()

app.use("/user", signupRoute)
// http://localhost:50000/user/signup


app.listen(port, ()=>{
  createConnection();
    console.log("Server Started and connected to DB");
})