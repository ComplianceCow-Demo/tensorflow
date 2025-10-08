// Example vulnerable code for CodeQL test
const express = require("express");
const app = express();

app.get("/vuln", (req, res) => {
  // Unsafe use of eval() - triggers CodeQL alert
  eval(req.query.userInput);
  res.send("OK");
});

app.listen(3000);
