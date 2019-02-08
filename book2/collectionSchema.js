const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  idusuarios: String,
  username:String,
  contraseña:String,
  usuariosregistrados:Number,
  idusuariosregistrados:Number,
  nombre:String,
  edad:Number,
  ciudad:String,
  email:String,
  grado:String,
});
module.exports = mongoose.model("collection", collectionSchema);
