let UserModel = require('../models/user'),
    GenericFunctions = require('../util/GenericFunctions')

module.exports.getAllUsers = async function (app, req, res) {
    let { connect, disconnect } = app.config.dbConnection

    await connect()

    let users = await UserModel.find()

    await disconnect()

    if (users.length > 0)
        return res.send(users)

    res.status(400).send({
        message: 'Não foram encontrados usuarios'
    })

}

module.exports.insertUser = async function (app, req, res) {
    if (GenericFunctions.isEmpty(req.body))
        return res.status(400).send({
            message: "User é obrigatorio"
        })

    let { connect, disconnect } = app.config.dbConnection,
        { user } = req.body

    await connect()

    const newUser = await new UserModel(user)

    let result = await newUser.save()

    await disconnect()

    res.status(201).send(result)
}

module.exports.deleteUser = async function (app, req, res) {
    if (GenericFunctions.isEmpty(req.params))
        return res.status(400).send({
            message: "Id é obrigatorio"
        })

    let { connect, disconnect } = app.config.dbConnection,
        { id } = req.params

    await connect()

    let result = await UserModel.findByIdAndDelete(id)

    await disconnect()

    if (result)
        res.send(result)

    res.status(400).send({
        message: "Não foi encontrado Usuario com esse id"
    })

}

module.exports.updateUser = async function (app, req, res) {
    if (GenericFunctions.isEmpty(req.body))
        return res.status(400).send({
            message: "User é obrigatorio"
        })

    let { connect, disconnect } = app.config.dbConnection,
        { user } = req.body, { _id } = user

    await connect()

    let result = await UserModel.findByIdAndUpdate(_id, user)

    await disconnect()

    res.send(result)
}