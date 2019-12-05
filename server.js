// 1. Dependencies
var express = require("express");
// var fs = require("fs");

// 2. I'm creating an 'express' server called app
var app = express();

// 3. Sets a port or run at 7000, Later listener will listen this
var PORT = process.env.PORT || 7000;

//4. Use a middleware to parse the JSON data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//what folder the browser can see
app.use(express.static("public"));

//To handle data parsing
const fs = require("fs");
const util = require("util");

//5. Bring routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//6. Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});


/* // Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/index.html", function(err, data) {
      if (err) throw err;
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } */