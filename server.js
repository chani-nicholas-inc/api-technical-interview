const express = require('express')
const app = express()

// get
app.get('/', (req, res) => {
  res.send('Sup, Stars?')
})

app.get('/transits', (req, res) => {
  res.send('This is the transits route.')
})

// post

// put

// delete

app.listen(8000)