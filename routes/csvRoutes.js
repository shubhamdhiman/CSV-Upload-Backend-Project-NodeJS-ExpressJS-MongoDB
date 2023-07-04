const express = require("express");
const multer = require("multer");
const fs = require("fs");
const csvParse = require("csv-parser");
const { homePage, uploadPage } = require("../controllers/csvController");

const upload = multer({ dest: "uploads/" });

const route = express.Router();

route.get("/", homePage);
route.get("/upload", uploadPage);
route.post("/upload", upload.single("inputFile"), function (req, res) {
  // console.log(req.body)
  // console.log(req.file)
  let file = req.file;
  fs.createReadStream(file.path).pipe(csvParse()).on('data',function(data){
    console.log(data, "this is data...")
  })
  res.send({ message: "Upload file url" });
});
module.exports = route;
