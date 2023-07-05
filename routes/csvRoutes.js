const express = require("express");
const csvModel = require("../model/csvModel");
const multer = require("multer");
const fs = require("fs");
const csvParse = require("csv-parser");
const { filePage, uploadPage } = require("../controllers/csvController");

const upload = multer({ dest: "uploads/" });

const route = express.Router();

route.get("/filepage/:id", filePage);
route.get("/", uploadPage);

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
    console.log("file uploaded successfully")
    res.send({filename:file.originalname,file:file.filename});
  } catch (err) {
    console.log("this is the error", err);
  }
  

});
module.exports = route;
