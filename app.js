const app = require('./config/server'),
    port = 8000

app.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}`)
})
