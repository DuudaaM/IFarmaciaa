const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Farmaceutico = db.define("Farmaceutico", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
             type: DataTypes.STRING,
             allowNull: false
        },
        senha: DataTypes.STRING
    }
);

module.exports = Farmaceutico;