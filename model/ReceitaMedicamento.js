const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Receita = require("./Receita");
const  Estoque = require("./Estoque");

const ReceitaMedicamento = db.define("ReceitaMedicamento",
    {
        EstoqueId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Estoque, 
                key: 'id'
            }
        },
        ReceitaId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Receita, 
                key: 'id'
            }
        },
        entrega: DataTypes.BOOLEAN
    }
);

Receita.belongsToMany(Estoque, {through:ReceitaMedicamento, as:'Medicamentos'});
Estoque.belongsToMany(Receita, {through:ReceitaMedicamento, as:'Receitas'})
module.exports = ReceitaMedicamento;