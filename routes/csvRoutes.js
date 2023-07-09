const express = require("express");

// Importing csv Model
const csvModel = require("../model/csvModel");

// Importing the controller functions
const { filePage, uploadPage, filePageNumber } = require("../controllers/csvController");

// Using multer to get the data from the front-end and store
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// const fs = require("fs");
// const csvParse = require("csv-parser");

// Calling the router method
const route = express.Router();

// Landing page route
route.get("/", uploadPage);

// Route for file
route.get("/filepage/:id", filePage);

// Route for pagination
route.get("/filepage/:id/:ide", filePageNumber);

// Route to upload a csv file
route.post("/upload", upload.single("inputFile"), async function (req, res) {

  let file = req.file;
  if (file.mimetype != "text/csv") {
    return res.status(400).send("Select CSV files only.");
  }
  try {
    let createFile = await csvModel.create({
      fileOriginalName: file.originalname,
      filePath: file.path,
      file: file.filename,
    });
    createFile.save();
    res.send({filename:file.originalname,file:file.filename});
  } catch (err) {
    console.log("this is the error", err);
  }
  

});

// Exporting the routes
module.exports = route;
