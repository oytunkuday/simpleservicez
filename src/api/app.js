const express = require("express");
const msgRouter = require("./routes/msgRoutes");

const app = express();

app.use(express.json());

app.use("/messages", msgRouter);

app.disable("etag");
module.exports = app;
