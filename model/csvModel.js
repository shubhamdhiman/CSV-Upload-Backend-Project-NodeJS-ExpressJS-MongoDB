const mongoose = require("mongoose")

const fileSchema = new mongoose.Schema({
    fileOriginalName:{
        type:String,
    },
    filePath:{
        type:String,
    },
    file:{
        type:String,
    }
},{
    timestamps:true,
})  

const file = mongoose.model("file",fileSchema)
module.exports = file;