const asyncHandler = require("express-async-handler")
const homePage = asyncHandler(
    async function(req,res){
        res.render("homePage")
    }
)
const uploadPage = asyncHandler(
    async function(req,res){
        res.render("uploadPage")
    }
)
const uploadFile = asyncHandler(
    async function(req,res){
        // console.log("on the post page")
        // // res.redirect("back")
        // res.send({message:"Working Successfully"})
          // Check if a file was uploaded
  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return res.status(400).json({ error: 'No file uploaded' });
  // }
  console.log(req.body) 
res.send({message:"called successfully"})
  // // Get the uploaded file
  // const file = req.files.csvFile;

  // // Read and parse the CSV file
  // fs.createReadStream(file.tempFilePath)
  //   .pipe(csv())
  //   .on('data', (data) => {
  //     // Create a new document using the DynamicModel schema
  //     const document = new DynamicModel(data);

  //     // Save the document to MongoDB
  //     document.save()
  //       .then(() => {
  //         console.log('Document saved:', document);
  //       })
  //       .catch(error => {
  //         console.error('Error saving document:', error);
  //       });
  //   })
  //   .on('end', () => {
  //     console.log('CSV file processed successfully');
  //     return res.status(200).json({ message: 'CSV file processed successfully' });
  //   });
    }
)

module.exports = {
    homePage,
    uploadPage,
    uploadFile,
}