//======================server===============================//

// this is where you set up your express server, go back to the earlier lessons, and copy the server info 

var mongoose = require("mongoose");
var express = require("express");
var app = express();




// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({    defaultLayout: "main"   }) );
app.set("view engine", "handlebars");

// this should connect front end
//==================Connection to Mongoose==================//
var MONGODB_URI =
 process.env.MONGODB_URI || "mongodb://localhost/CNNHeadlines";
//mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});


var routes = require("./controller/controller.js");
app.use("/", routes);


app.listen(3008, function() {
    console.log("App running on port 3008!");
  });

  