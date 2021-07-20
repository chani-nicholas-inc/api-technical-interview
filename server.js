const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Sup, Stars?')
})

app.listen(8000)