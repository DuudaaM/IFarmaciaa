const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");


const Farmacia = db.define("Farmacia",
    {
        id: {
          type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        receita: DataTypes.STRING
        
    }      
);

module.exports = Farmacia;