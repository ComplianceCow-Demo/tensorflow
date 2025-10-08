const express = require('express')
const { exec } = require('child_process')
const app = express()

app.get('/ping', (req, res) => {
  const host = req.query.host
  // vulnerable: user input interpolated into shell command
  exec(`ping -c 1 ${host}`, (err, stdout, stderr) => {
    if (err) return res.status(500).send(err.toString())
    res.send(stdout)
  })
})

app.listen(3000)
