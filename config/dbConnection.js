const mongoose = require('mongoose')

module.exports.connect = async function () {
    return await mongoose.connect(`mongodb://localhost:27017/helloWord`, {
        useNewUrlParser: true,
        useFindAndModify: false
    })
}

module.exports.disconnect = async function () {
    return await mongoose.disconnect()
}