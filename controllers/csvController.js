
const files = require("../model/csvModel")

// Importing csv-parser and file system module
const fs = require("fs")
const csvParser = require("csv-parser")
const asyncHandler = require("express-async-handler")

// Uploading Page Controller
const uploadPage = asyncHandler(
    async function(req,res){
        // finding files in the database and returning
        const allFiles =await files.find({})
        res.render("uploadPage",{files:allFiles,title:"Upload Page"})
    }
)

// Initialiing the page number
let page = 1;


// File Page Controller
const filePage = asyncHandler(
    async function(req,res){
        // finding file in the database which matches the id
        let csvFile = await files.findOne({ file: req.params.id });
        const results = [];
        const header = [];
        // parsing the csv file and storing first row in the header array and rest of the rows in the results array
        fs.createReadStream(csvFile.filePath) //seeting up the path for file upload
            .pipe(csvParser())
            .on('headers', (headers) => {
                headers.map((head) => {
                    header.push(head);
                });
            })
            .on('data', (data) =>
                results.push(data))
            .on('end', () => {
                if(results.length>100){
                    var partialData = results.slice(0,100)
                }else{
                    var partialData = results
                }
                // Updating the value of page
                page = 1;

                // rendering the filePage and also passing all the data
                res.render("filePage", {
                    fileId:req.params.id,
                    title: "File Page", 
                    fileName: csvFile.fileOriginalName,
                    head: header,
                    data: partialData,
                    fullData:results,
                    length: results.length,
                    page:page
                });
            });
    }
)

// Pagination Controller
const filePageNumber = asyncHandler(
    async function(req,res){
        
        // parsing the csv file and storing first row in the header array and rest of the rows in the results array
        let csvFile = await files.findOne({ file: req.params.id });
        const results = [];
        const header = [];
        fs.createReadStream(csvFile.filePath) //seeting up the path for file upload
            .pipe(csvParser())
            .on('headers', (headers) => {
                headers.map((head) => {
                    header.push(head);
                });
            })
            .on('data', (data) =>
                results.push(data))
            .on('end', () => {
                fileData = results;

                // logic for single page rows
                let len = +req.params.ide * 100
                let slicing = fileData.slice(len-100,len)
                page = +req.params.ide

                // rendering the filePage and also passing all the data
                res.render("filePage", {
                    fileId:req.params.id,
                    title: "File Page", 
                    fileName: csvFile.fileOriginalName,
                    head: header,
                    data: slicing,
                    fullData:results,
                    length: results.length,
                    page:page
                });
            });
    }
)

// Exporting all the controller functions
module.exports = {
    filePage,
    uploadPage,
    filePageNumber,
}