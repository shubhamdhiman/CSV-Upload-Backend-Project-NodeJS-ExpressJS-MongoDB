// Importing the required dependencies
const express = require("express")

// Importing bodyparser
const bodyParser = require("body-parser")

// Importing path
const path = require("path")

// Importing the mongoose connection
const connectDb = require("./config/dbConnection")

// Calling the express function and storing it in app variable
const app = express()

// Setting up the port
const port = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Calling the function of mongoose connection with database
connectDb()

// Static Files Path Setup
app.use(express.static(__dirname+'/public'))

// View Engine Setup
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

// Route Setup
app.use('/', require("./routes/csvRoutes"))

// Listening the server on port provided
app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`)
})