var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("home");
});
app.get("/bye", function(req, res){
  res.render("bye");
});

app.listen(3000, function(){
     console.log("server is running on port" + 3000);});
