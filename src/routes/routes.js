const { Router } = require("express");
const rotaLogin = require("./login.routes");//importar arquivo com rota de login
const rotaUsuario = require("./usuario.routes");//importar arquivo com rotas de CRUD do usuário

const routes = Router()

routes.use('/login', rotaLogin) 
routes.use('/usuarios', rotaUsuario)

module.exports = routes