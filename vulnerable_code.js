// file: vulnerable_code.js
const express = require('express');
const app = express();

// Unsafe use of eval - triggers CodeQL
app.get('/run', (req, res) => {
  eval(req.query.code);
  res.send('done');
});

app.listen(3000);
