var express = require("express");

var mongoose = require("mongoose");

var PORT = 3000;

// Requiring the `User` model for accessing the `toDoListModel` collection
var toDoList = require("./toDoListModel.js");

// Initialize Express
var app = express();




// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/custommethods", { useNewUrlParser: true });

// Routes

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {



  toDoList.create(list)
    .then(function(dbtoDoList) {
      // If saved successfully, send the the new list document to the client
      res.json(dbtoDoList);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

