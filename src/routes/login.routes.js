const { Router } = require("express");
const Usuario = require("../models/Usuario");
const { sign } = require("jsonwebtoken");

const rotaLogin = new Router()

rotaLogin.post('/', async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            return res.status(400).json({ message: `Todos os campos de login são obrigatórios.` })
        }

        const usuario = await Usuario.findOne({
            where: { email: email, password: password }
        })

        if (!usuario) {
            return res.status(404).json({ message: `Email ou Senha incorretos. Usuário não foi encontrado.` })
        }

        const payload = { sub: usuario.id, email: usuario.email, nome: usuario.nome }

        const token = sign(payload, process.env.SECRET_JWT)

        res.status(200).json({ Token: token })

    } catch (error) {
        return res.status(500).json({ error: error, message: 'Algo errado no login' })
    }
})

module.exports = rotaLogin