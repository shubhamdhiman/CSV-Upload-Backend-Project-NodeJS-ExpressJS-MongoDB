const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: true,
  },
  organizationId: {
    type: String,
    required: true,
    trim: true,
  },
  fullName: {
    type: String,
    require: true,
    trim: true,
  },
  website: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  founded: {
    type: Number,
    required: true,
  },
  industry: {
    type: String,
    required: true,
    trim: true,
  },
  noOfEmployees: {
    type: Number,
    required: true,
  },
});


module.exports = mongoose.model("csv",csvSchema);