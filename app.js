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

  fname: String,
  lname: String,
  Email: String,
  Mobile: String,
  Address: String,
  CompanyName: String,
  Subcategory1: String,
  Subcategory2: String,
  Subcategory3: String,
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

    fname: req.body.firstname,
    lname: req.body.lastname,
    Email: req.body.email,
    Mobile: req.body.mobileno,
    Address: req.body.Caddress,
    CompanyName: req.body.Cname,
    Subcategory1: req.body.Sname1,
    Subcategory2: req.body.Subcategory,
  });
  console.log(form);
  form.save();
  res.render("post");
});

app.get("/post", function(req, res) {
  res.render("post");
});

app.listen(3000, function() {
  console.log("running on port 3000");
});
