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
        console.log("on the post page")
        // res.redirect("back")
        res.send({message:"Working Successfully"})
    }
)

module.exports = {
    homePage,
    uploadPage,
    uploadFile,
}