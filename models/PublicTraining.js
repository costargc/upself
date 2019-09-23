var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var PublicTrainingSchema = new Schema({
  message: String,
  score: Number,
  response: String
  // counter: Number
});

// This creates our model from the above schema, using mongoose's model method
var PublicTraining = mongoose.model("PublicTraining", PublicTrainingSchema);

// Export the Note model
module.exports = PublicTraining;