const express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    app = express()

app.set("view engine", "ejs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(expressValidator())

consign()
    .include('src/routes')
    .then('src/service')
    .then('config/dbConnection.js')
    .into(app)

module.exports = app