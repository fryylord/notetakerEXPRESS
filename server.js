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

//routes to notes.html, index.html, and db.json
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

//Create new note and add it to the db.json file
app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    newNote.id = //interval code here;
    noteData.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(data));
    res.json(noteData);
})

//Listening function for port
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  