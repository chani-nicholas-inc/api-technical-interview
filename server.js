const express = require('express')
const app = express()
const fs = require('fs')

// body-parser middleware
app.use(express.json())
// app.use(express.urlencoded({extended: false}))

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
  res.send(`This is the param: ${req.params.param}`)
})

// list all houses

app.get('/houses', (req, res) => {
  let houses = fs.readFileSync('./houses.json')
  let houseData = JSON.parse(houses)
  res.send(houseData)
})

// list all user birth data sets
app.get('/user-birth-data', (req, res) => {
  let userBirthData = fs.readFileSync('./user-birth-data.json')
  let data = JSON.parse(userBirthData)
  res.send(data)
})

// post
app.post('/user-birth-data', (req, res) => {
  // read user birth data file
  let userBirthData = fs.readFileSync('./user-birth-data.json')
  let data = JSON.parse(userBirthData)
  // add item to user birth data array
  data.push(req.body)
  // save user birth data to user-birth-data.json file
  fs.writeFileSync('./user-birth-data.json', JSON.stringify(data))
  // list all user birth data
  res.redirect('/user-birth-data')
})

// put

// delete

app.listen(8000)