
const files = require("../model/csvModel")
const fs = require("fs")
const csvParser = require("csv-parser")
const asyncHandler = require("express-async-handler")

// Uploading Page Controller
const uploadPage = asyncHandler(
    async function(req,res){
        const allFiles =await files.find({})
        console.log(allFiles)
        res.render("uploadPage",{files:allFiles,title:"Upload Page"})
    }
)

// File Page Controller
const filePage = asyncHandler(
    async function(req,res){
        let csvFile = await files.findOne({ file: req.params.id });
        // console.log(csvFile);
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
                if(results.length>100){
                    var partialData = results.slice(0,100)
                }else{
                    var partialData = results
                }
                res.render("filePage", {
                    fileId:req.params.id,
                    title: "File Page", 
                    fileName: csvFile.fileOriginalName,
                    head: header,
                    data: partialData,
                    fullData:results,
                    length: results.length
                });
            });
    }
)

// Pagination Controller
const filePageNumber = asyncHandler(
    async function(req,res){
        

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
                let len = +req.params.ide * 100
                let slicing = fileData.slice(len-100,len)
                res.render("filePage", {
                    fileId:req.params.id,
                    title: "File Page", 
                    fileName: csvFile.fileOriginalName,
                    head: header,
                    data: slicing,
                    fullData:results,
                    length: results.length
                });
            });
    }
)
module.exports = {
    filePage,
    uploadPage,
    filePageNumber,
}