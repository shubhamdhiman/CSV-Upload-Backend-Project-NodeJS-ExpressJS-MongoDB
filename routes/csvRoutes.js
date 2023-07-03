const express = require("express");
const {homePage, uploadPage} = require("../controllers/csvController")

const route = express.Router()

route.get('/', homePage)
route.get('/upload',uploadPage)
module.exports = route; 