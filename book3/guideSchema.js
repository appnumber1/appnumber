const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guideSchema = new Schema({
  informacion:String,
  tema:String,
});
module.exports = mongoose.model("guide", guideSchema);
