const expresss = require("express");
const userRouter = require("./router/userRouter.js")
const productRouter = require("./router/productRouter.js")
const port = 3000;

const app = expresss();

app.get("/", (req, res) => {
    res.send (`<h1> Hello World ! </h1>`);
});

app.use("/api", userRouter);
app.use("/api",productRouter);

app.listen(port, () => {
    console.log("Servidor online!");
});