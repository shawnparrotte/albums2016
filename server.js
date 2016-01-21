const express  = require("express");
const app      = express();
const mongoose = require("mongoose");
const path     = require('path');

var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

mongoose.connect("mongodb://shawnp:F#A#infinity1@ds047345.mongolab.com:47345/albums2016");

var db = mongoose.connection;

db.on("error", console.error);

db.once("open", function(err){
  app.listen(port);
});

var schema = {
  artist: String,
  album: String,
  genre: String,
  score: String,
  cover: String,
  link: String
}

var Albums = mongoose.model("Albums", schema);

var info;

Albums.find(function(err, data){
  if(err){
    console.error;
  } else {
    info = JSON.stringify(data);
  }
});

app.get('/', function(req, res){
  res.render("index", { information: info })
});
