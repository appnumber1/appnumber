express = require("express");
mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
mongoose
.connect(
    "mongodb://localhost:27017/appnumber",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

var user = require("./book2/collection");

app.get("/colecciones", (req, res) => {
  user.getUsers(req, res);
});

app.get("/colecciones/:id", (req, res) => {
  user.getUser(req, res);
});

app.post("/colecciones", (req, res) => {
  user.newUser(req, res);
});
app.put("/colecciones/:id", (req, res) => {
  user.updateUser(req, res);
});

app.delete("/colecciones/:id", (req, res) => {
  user.deleteUser(req, res);
});
app.listen(9000);
console.log(`Server on %s ${app.settings.env}`);
