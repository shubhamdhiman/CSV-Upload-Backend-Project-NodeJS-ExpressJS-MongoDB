const express = require("express");
const {homePage, uploadPage, uploadFile} = require("../controllers/csvController")

const route = express.Router()

route.get('/', homePage)
route.get('/upload',uploadPage)
route.post('/upload',uploadFile)
module.exports = route; 
