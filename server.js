var express = require('express');
var bodyParser = require("body-parser");
var app = express();


app.set('views', __dirname + '/views' ); //__dirname = Environment Variable
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = require('./router/main')(app);
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});
