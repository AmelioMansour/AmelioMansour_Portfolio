const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));


app.get("/", (req, res) => {    
    res.render("index");
});
app.get("/views/index.ejs", (req, res) => {
    res.render("index");
});
app.get("/views/html/my_resume.ejs", (req, res) => {
    res.render("./html/my_resume");
});
app.get("/views/html/my_fun_facts.ejs", (req, res) => {
    res.render("./html/my_fun_facts");
});
app.get("/views/html/blog.ejs", (req, res) => {
    res.render("./html/blog");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));