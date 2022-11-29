//dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

// Sets port for listening
const PORT = process.env.PORT || 8001;


//use functions for resource data
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Listening function for port
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  