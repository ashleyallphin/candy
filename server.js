//DEPENDENCIES
//require express
var express = require("express");



//require handlebars
var exphhbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));


app.engine('handlebars', exphhbs({
    //main.handlebars
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/candy_controller.js');
app.use('/', routes);

app.listen(PORT);
console.log("App listening on port: http://localhost:" + PORT);

