const express = require('express')
const app = express()
const fs = require('fs')
let houses = require('./houses.json')
let userBirthData = require('./user-birth-data.json')

// body-parser middleware
app.use(express.json())

// create a home route
app.get("/", (req, res) => {
  res.send('Welcome home')
})

// create transits endpoint, route named "transits"
app.get("/transits", (req, res) => {
  res.send("<h1>Welcome to Transits</h1>")
})

// create route that takes in a param
app.get("/api/:params", (req, res) => {
  res.send(`The params is ${req.params.params}`)
})

// list all houses
app.get("/houses/all", (req, res) => {
  res.status(200).json({success: true, data: houses})
})

// get one house
app.get("/houses/one/:number", (req, res) => {
  const number = req.params.number
  const house = houses.find(house => house.number === Number(number))
  if (!house) {
    return res.status(404).json({success: false, msg: 'House number does not exist'})
  } else {
    return res.status(200).json({success: true, data: house})
  }
})

// list all user birth data
app.get("/all-birth-data", (req, res) => {
  res.status(200).json({success: true, data: userBirthData})
})

// post new user birth data to user-birth-data.json
app.post("/all-birth-data/add-data", (req, res) => {
  const newBirthData = {
    "birthDay": req.body.birthDay,
    "birthMo": req.body.birthMo,
    "birthYr": req.body.birthYr
  }
  userBirthData.push(newBirthData)
  res.status(200).json({succes: true, data: userBirthData})
})

app.listen(8000)