const express = require('express')
const app = express()
const fs = require('fs')

// get
app.get('/', (req, res) => {
  res.send('Sup, Stars?')
})

// url pattern
app.get('/transits', (req, res) => {
  res.send('This is the transits route.')
})

// params

app.get('/p/:param', (req, res) => {
  console.log('req.params: ', req.params)
  res.send(`This is the param: ${req.params.param}`)
})

// list all houses

app.get('/houses', (req, res) => {
  let houses = fs.readFileSync('./houses.json')
  let houseData = JSON.parse(houses)
  console.log(houseData)
  res.send(houseData)
})

// post

// put

// delete

app.listen(8000)