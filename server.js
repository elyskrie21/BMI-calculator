const express = require("express");
const app = express();

app.use(express.urlencoded());

app.listen(3000, function (param) {
  console.log("Listening on port 300");
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.get("/css/styles.css", function (req, res) {
  res.sendFile(__dirname + "/css/styles.css"); 
})

app.post("/server.js", function (req, res) {
  var height = parseFloat(req.body.h);
  var weight = parseFloat(req.body.weight);
  console.log(height + " " + weight);
  
  var bmi = weight / (Math.pow(height,2)); 

  res.send("Your BMI is " + bmi); 
})