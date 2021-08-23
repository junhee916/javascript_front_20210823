const express = require('express')
const static = require('serve-static')
const path = require('path')
const app = express()

app.use('/', static(path.join(__dirname, 'html')))
app.use('/script', express.static(__dirname + '/script'))
app.use(express.static('public'))

const PORT = 5000 || 7000

app.listen(PORT, console.log("connected server..."))