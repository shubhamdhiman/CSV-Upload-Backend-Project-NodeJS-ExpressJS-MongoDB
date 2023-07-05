
const files = require("../model/csvModel")
const fs = require("fs")
const csvParser = require("csv-parser")
const asyncHandler = require("express-async-handler")
const filePage = asyncHandler(
    async function(req,res){
        // console.log(req.params)
        // const csvFile = files.findOne({file:req.params.id})
        // console.log(csvFile)
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
                // console.log(header);
            })
            .on('data', (data) =>
                results.push(data))
            .on('end', () => {
                // console.log(results.length);
                // console.log(results);
                console.log(header)
                // console.log(results)
                res.render("filePage", {
                    title: "File Page", 
                    fileName: csvFile.fileName,
                    head: header,
                    data: results,
                    length: results.length
                });
            });
//         fs.createReadStream(file.path).pipe(csvParse()).on('data',function(data){
//     console.log( "this is data...")
//   })
        // res.render("filePage")
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