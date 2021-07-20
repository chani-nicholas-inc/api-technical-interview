const express = require('express')
const app = express()

// get
app.get('/', (req, res) => {
  res.send('Sup, Stars?')
})

// url pattern
app.get('/transits', (req, res) => {
  res.send('This is the transits route.')
})

// params

app.get('/:param', (req, res) => {
  console.log('req.params: ', req.params)
  res.send(`This is the param: ${req.params.param}.`)
})

// post

// put

// delete

app.listen(8000)