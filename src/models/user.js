const mongoose = require('mongoose'),
    findOrCreate = require("mongoose-find-or-create"),
    Schema = mongoose.Schema

const User = new Schema({
    name: String,
    dateOfBirth: Date,
    city: String,
    cpf: Number
})

User.plugin(findOrCreate)

module.exports = mongoose.model('User', User)