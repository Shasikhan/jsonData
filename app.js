var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send(`<h1>Welcome to Increw Management System</h1>`);
});

var port = process.env.PORT || 1337;
app.listen(port);
console.log("App is running at " + port);
