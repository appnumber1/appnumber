const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  idnotas:String,
  nota1:String,
  nota2:String,
  nota3:String,
});
module.exports = mongoose.model("notes", notesSchema);
