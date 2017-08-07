const express = require("express");
const cors = require("cors");
const estimate = require("./estimate");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.use(cors());

app.post("/estimate", function(req, res) {
  res.send(estimate(req.body));
});

app.listen(5555, function() {
  console.log("Example app listening on port 5555!");
});
