const mongoose = require("mongoose");
const express = require("express");
const app = require("./api/app");
const bodyParser = require("body-parser");
var http = require('http');
const port = 3000;

async function db() {
  await mongoose
    .connect(
      "mongodb+srv://oytunkuday:Q9kQ1Anrp1Nj5zYD@simpleservicez.yptjr5t.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("DB Connection established!"))
    .catch((err) => console.log(err));
}
app.use(bodyParser.urlencoded({extended: false}));

db();
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
