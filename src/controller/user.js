module.exports.getAllUsers = app => async (req, res) => {
    let { getAllUsers } = app.src.service.user

    await getAllUsers(app, req, res)
}

module.exports.insertUser = app => async (req, res) => {
    let { insertUser } = app.src.service.user

    await insertUser(app, req, res)
}

module.exports.deleteUser = app => async (req, res) => {
    let { deleteUser } = app.src.service.user

    await deleteUser(app, req, res)
}

module.exports.updateUser = app => async (req, res) => {
    let { updateUser } = app.src.service.user

    await updateUser(app, req, res)
}