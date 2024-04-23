const { Router } = require("express");
const Usuario = require("../models/Usuario");
const { auth } = require('../middlewares/auth')

const rotaUsuario = new Router()

rotaUsuario.post('/', async (req, res) => {
    try {
        const nome = req.body.nome
        const email = req.body.email
        const password = req.body.password

        if (!nome || !email || !password) {
            return res.status(400).json({ message: 'Necessário preencher todos os campos.' })
        }

        const usuario = await Usuario.create({
            nome: nome,
            email: email,
            password: password
        })

        res.status(201).json(usuario)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não foi possível cadastrar aluno.' })
    }
})

rotaUsuario.get('/', auth , async(req, res)=>{
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
})

module.exports = rotaUsuario