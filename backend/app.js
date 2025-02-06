const express = require("express");
const cors = require("cors");
const app = express();

const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const staffRouter = require("./routers/staffRouter");
const servicesRouter = require("./routers/servicesRouter");
const imagesRouter = require("./routers/imagesRouter");

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server running");
});

app.use("/api/staff", staffRouter);
app.use("/api/services", servicesRouter);
app.use("/api/images", imagesRouter);

app.use(errorHandler);
app.use(notFound);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
})