const { verify } = require("jsonwebtoken")

//Verificar a autenticidade do Token informado
async function auth(req, res, next) {
    try {
        console.log('Middleware funcionando.')
        const { authorization } = req.headers

        req['payload'] = verify(authorization, process.env.SECRET_JWT)

        next()

    } catch (error) {
        return res.status(401).json({
            message: 'Falha na Autenticação: Usuário, Senha ou Autorização inválida',
            cause: error.message
        })
    }
}

module.exports = { auth }