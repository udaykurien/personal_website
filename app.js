var express = require('express');
var path = require('path');

var app = express();
app.set('view engine', 'ejs');

var express = require('express');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

app.get("/home", function(req, res){
    res.render("home");
});
app.get("/bye", function(req, res){
  res.render("bye");
});
app.get("/resume", function(req, res){
  res.render("resume");
});
app.get("/publications", function(req, res){
  res.render("publications");
});
app.get("/skills", function(req, res){
  res.render("skills");
});
app.get("/media-coverage", function(req, res){
  res.render("media-coverage");
});

app.listen(3000, function(){
     console.log("server is running on port" + 3000);});
