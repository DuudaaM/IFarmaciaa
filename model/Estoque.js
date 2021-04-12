const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Estoque = db.define("Estoque",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome : {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantidade: {
            type: DataTypes.INTEGER,
             allowNull: false
        }
    }  
);

module.exports = Estoque;