const express = require("express")

const app = express()

const port = 5000

app.get('/',(req,res)=>{
    res.send({message:"WOrking perfectly"})
})

app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`)
})