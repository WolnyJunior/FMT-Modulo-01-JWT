const { Router } = require("express");
const rotaLogin = require("./login.routes");
const rotaUsuario = require("./usuario.routes");

const routes = Router()

routes.use('/login', rotaLogin)
routes.use('/usuarios', rotaUsuario)

module.exports = routes