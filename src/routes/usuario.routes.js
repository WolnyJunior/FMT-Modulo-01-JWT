const { Router } = require("express");
const Usuario = require("../models/Usuario");
const { auth } = require('../middlewares/auth');

const rotaUsuario = new Router()

//Rota adicionar usuário - sem verificação JWT
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

//Rota para listar usuários - com verificação de middleware utilizando JWT
rotaUsuario.get('/', auth, async (req, res) => {
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
})

//Rota para atualizar usuários - com verificação de middleware utilizando JWT
rotaUsuario.put('/:id', auth, async (req, res) => {

    try {
        const { id } = req.params
        const newData = req.body

        const user = await Usuario.findByPk(id)
        if (!user) {
            return res.status(404).json({ message: `Usuário não encontrado` })
        }
        if (!newData.nome || !newData.email || !newData.password) {
            return res.status(400).json({ message: 'Necessário preencher todos os campos.' })
        }

        user.update(req.body)

        await user.save()
        res.json(user)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não foi possível atualizar usuário' })
    }
})

//Rota para deltetar usuários - com verificação de middleware utilizando JWT
rotaUsuario.delete('/:id', auth, async (req, res) => {
    try {
        const { id } = req.params

        const userDeletado = await Usuario.destroy({
            where: {
                id: id
            }
        })

        if (userDeletado === 0) {
            return res.status(404).json({ message: 'Nenhum usuário encontrado.' })
        }
        res.status(204).json({})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não foi possível deletar usuário' })
    }
})

module.exports = rotaUsuario