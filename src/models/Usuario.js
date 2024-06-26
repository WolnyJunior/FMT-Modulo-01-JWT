const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Usuario = connection.define('usuarios', {
    nome:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
})

module.exports = Usuario