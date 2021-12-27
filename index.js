const express = require("express");
const path = require("path");
const ejs = require("ejs");
const { request } = require("express");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//Nav routes
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
app.get("/views/html/trivia.ejs", (req, res) => {
    x = null;
    res.render("./html/trivia");
});
//
app.locals.x = null;
app.post("/getanswers/", (req, res) => {
    let x = 0;
    let data = {
        a1: req.body.Answer1, a2: req.body.Answer2,
        a3: req.body.Answer3, a4: req.body.Answer4
    }
    if (data.a1 == "B") {
        x = x + 1;
    }
    if (data.a2 == "C") {
        x = x + 1;
    }
    if (data.a3 == "A") {
        x = x + 1;
    }
    if (data.a4 == "D") {
        x = x + 1;
    }
    res.render('html/trivia.ejs', { x: x });


    res.send(console.log(x));


});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
