// const mongoose = require("mongoose");

// const csvSchema = new mongoose.Schema({
//   index: {
//     type: Number,
//     required: true,
//   },
//   organizationId: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   fullName: {
//     type: String,
//     require: true,
//     trim: true,
//   },
//   website: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   country: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   founded: {
//     type: Number,
//     required: true,
//   },
//   industry: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   noOfEmployees: {
//     type: Number,
//     required: true,
//   },
// });


// module.exports = mongoose.model("csv",csvSchema);
const mongoose = require('mongoose');

// Create a base schema
const BaseSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Function to generate dynamic schema based on fields from CSV file
const generateDynamicSchema = (fields) => {
  const DynamicSchema = new mongoose.Schema({}, { collection: 'dynamic_collection' });

  fields.forEach(field => {
    DynamicSchema.add({
      [field]: String
    });
  });

  DynamicSchema.add(BaseSchema);

  return DynamicSchema;
};

module.exports = mongoose.model('DynamicModel', generateDynamicSchema([]));
