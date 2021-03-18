if (typeof require !== 'undefined') XLSX = require('xlsx');
const express = require('express')
var cors = require('cors')
var app = express()
const port = 3001

app.use(cors())

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})