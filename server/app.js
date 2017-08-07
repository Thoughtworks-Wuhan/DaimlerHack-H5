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

function callback(error, response, body) {
  if (error) {
    console.log("error", error);
  }
  console.log("step4-response body:", response.statusCode, body);
}

app.post("/estimate", function(req, res) {
  const response = estimate(req.body);
  console.log(response);
  res.send(response)
});

app.listen(5555, function() {
  console.log("Example app listening on port 5555!");
});
