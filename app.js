//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb+srv://vishal123:vishal123@cluster0.m9ogc.mongodb.net/Form?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const postSchema = {

  Name: String,
  email: String,
  mobileno: String,
  Comapany: String,
  Address: String,
  Category: String,
  w3review: String,
};

const Form = mongoose.model("Form", postSchema);


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("home");
});
app.post("/", function(req, res) {
  const form = new Form({

    Name: req.body.Name,
    email: req.body.email,
    mobileno: req.body.mobileno,
    Company: req.body.Company,
    Address: req.body.Address,
  w3review: req.body.  w3review,

  });
  form.save();
  res.render("post");
});

app.get("/post", function(req, res) {
  res.render("post");
});

let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}


app.listen(port, function() {
  console.log("running on port 3000");
});
