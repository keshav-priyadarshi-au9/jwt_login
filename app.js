const express = require("express")
const app = express()
const db = require("./db")
const port = process.env.PORT || 2600;

const cors = require("cors")
app.use(cors())

const authController = require('./controller/authController')
app.use('/api/auth', authController)

app.get("/",(req,res)=>{
    res.send("we will learn JWT")
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})