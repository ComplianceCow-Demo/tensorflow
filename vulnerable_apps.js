// vulnerable_app.js
const express = require("express");
const app = express();
const { exec } = require("child_process");

// CodeQL will flag this unsafe eval usage
app.get("/eval", (req, res) => {
  eval(req.query.input); // 🚨 unsafe use of eval
  res.send("Evaluated input!");
});

// CodeQL will flag this command injection
app.get("/exec", (req, res) => {
  exec("ls " + req.query.dir, (err, stdout) => {
    if (err) res.send("Error: " + err);
    else res.send("Files: " + stdout);
  });
});

app.listen(3000, () => console.log("Server running..."));
