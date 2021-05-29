const express = require(express);

const app = express();

app.get("/", (response, request) => {
  response.send("Express JS");
});

module.exports = app;
