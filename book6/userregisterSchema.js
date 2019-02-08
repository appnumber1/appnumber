const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userregisterSchema = new Schema({
  nombre:String,
  edad:String,
  ciudad:String,
  email:String,
  grado:String,
});
module.exports = mongoose.model("userregister", userregisterSchema);
