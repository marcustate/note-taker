// Dependencies 
// ========================================

const express = require("express");
const path = require("path");
const notes = require("./db/db.json");


const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

app.get("/assets/js/", (req, res) => {

    res.sendFile(path.join(__dirname, "./public/assets/js/index.js"));
})

app.get("/assets/css", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/assets/css/styles.css"));
})

app.get("/api/notes/", (req, res) => {
    return res.json(notes);
})

app.post("/api/notes/", (req, res) => {
    console.log(req.body);
    req.body.id = notes.length + 1;
    notes.push(req.body);
    return res.json(notes);
})

app.delete("/api/notes/:id", (req, res) => {
    console.log()
    res.send("/api/notes" + id);
    return res.json(notes);
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
