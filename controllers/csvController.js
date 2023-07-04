

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
// const uploadFile = asyncHandler( 
//     async  function
// )

module.exports = {
    homePage,
    uploadPage,
    // uploadFile,
}