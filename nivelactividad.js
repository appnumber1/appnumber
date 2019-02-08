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
    // "mongodb://localhost:27017/appnumber",
    "mongodb+srv://ivanp:YWdgc20dDmuW1xxK@cluster0-mec0m.mongodb.net/appnumber?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

var user = require("./book4/level");

app.get("/nivelactividad", (req, res) => {
  user.getUsers(req, res);
});

app.get("/nivelactividad/:id", (req, res) => {
  user.getUser(req, res);
});

app.post("/nivelactividad", (req, res) => {
  user.newUser(req, res);
});
app.put("/nivelactividad/:id", (req, res) => {
  user.updateUser(req, res);
});

app.delete("/nivelactividad/:id", (req, res) => {
  user.deleteUser(req, res);
});
app.listen(9000);
console.log(`Server on %s ${app.settings.env}`);
