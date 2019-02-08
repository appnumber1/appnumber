const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userrSchema = new Schema({
  username:String,
  contraseña:String,
});
module.exports = mongoose.model("userr", userrSchema);
