const mongoose = require("mongoose")

// Creating Mongoose Schema
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

// Exporting the schema
const file = mongoose.model("file",fileSchema)
module.exports = file;