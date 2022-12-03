const express = require("express");
const msgRouter = require("./routes/msgRoutes");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/messages", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
app.use("/messages", msgRouter);


app.disable("etag");

app.get('*', function(req, res){
    res.status(404).send('NO SUCH ROUTE???');
  });

module.exports = app;
