//Require Variables

const express    = require("express");
const app        = express();
const mongoose   = require("mongoose");
const bodyParser = require("body-parser");
const path       = require('path');
var port         = process.env.PORT || 3000;

//Define Middleware

var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({extended : false})

app.set("view engine", "ejs");
app.use(express.static("public"));

//Connect to DB and Provide Schema

mongoose.connect("mongodb://shawnp:F#A#infinity1@ds047345.mongolab.com:47345/albums2016");

var db = mongoose.connection;

var Schema = mongoose.Schema;

var albumSchema = new Schema({
  artist: String,
  album: String,
  genre: String,
  score: String,
  cover: String,
  link: String
});

var Album = mongoose.model("Album", albumSchema);

//Connect Port Once Database Loads

db.on("error", console.error);

db.once("open", function(err){
  app.listen(port);
});

//App Routes

app.get('/', function(req, res){
  res.render("index");
});

app.get('/api', function(req, res){

  //Load JSON Data from MongoDB
  Album.find(function(err, data){
    if(err){console.error}
    else {res.json(data)}
  });

});

app.get('/add-album', function(req, res){
  res.render("add-album");
});

app.post('/add-album', urlParser, function(req, res){

  var newAlbum = Album({
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
    score: req.body.score,
    link: req.body.link,
    cover: req.body.cover
  })

  newAlbum.save(function(err){
    if (err) throw err;
    console.log('album saved!');
  })

  res.render("add-album");
})
