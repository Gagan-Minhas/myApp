var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"/static")));

app.listen(8000,function(){
    console.log("Listening on Port: ", 8000);
})

app.post('/signin', function (req, res) {

})

var bodyParser = require("body-parser");

app.use(bodyParser.json());

