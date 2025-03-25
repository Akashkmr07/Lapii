const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("login", { message: null });
});

app.get("/register", (req, res) => {
    res.render("register", { message: null });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});