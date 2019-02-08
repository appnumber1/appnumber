const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const levelSchema = new Schema({
  idnivelactividad:String,
  nivel1:String,
  nivel2:String,
  nivel3:String,
});
module.exports = mongoose.model("level", levelSchema);
