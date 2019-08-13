const userController = require('../controller/user')

module.exports = app => {
    // trazer todos os registros
    app.get('/users', userController.getAllUsers(app))

    // Inserir novo usuario
    app.post('/user', userController.insertUser(app))

    // Deletar usuario
    app.delete('/user/:id', userController.deleteUser(app))

    // Update usuario
    app.put('/user', userController.updateUser(app))
}