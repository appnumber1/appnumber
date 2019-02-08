const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  nombreactividad: String,
});
module.exports = mongoose.model("activity", ActivitySchema);
