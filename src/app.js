const expresss = require("express");

const port = 3000;

const app = expresss();

app.get("/", (req, res) => {
    res.send (`<h1> Hello World ! </h1>`);
});

app.listen(port, () => {
    console.log("Servidor online!");
});