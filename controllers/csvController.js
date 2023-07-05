
const files = require("../model/csvModel")
const fs = require("fs")
const csvParser = require("csv-parser")
const asyncHandler = require("express-async-handler")
const filePage = asyncHandler(
    async function(req,res){
        let csvFile = await files.findOne({ file: req.params.id });
        console.log(csvFile);
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
                res.render("filePage", {
                    title: "File Page", 
                    fileName: csvFile.fileOriginalName,
                    head: header,
                    data: results,
                    length: results.length
                });
            });
    }
)
const uploadPage = asyncHandler(
    async function(req,res){
        const allFiles =await files.find({})
        // console.log(allFiles)
        res.render("uploadPage",{files:allFiles,title:"Upload Page"})
    }
)
// const uploadFile = asyncHandler(  
//     async  function
// )

module.exports = {
    filePage,
    uploadPage,
    // uploadFile,
}