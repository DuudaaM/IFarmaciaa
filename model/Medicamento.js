const {Sequilize, DataTypes} = require("sequilize");
const db = require("../db");


const Medicamento = db.define("Medicamento",
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
      
);

console.exports = Medicamento;