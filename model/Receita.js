const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Medico = require("./Medico");
const Paciente = require("./Paciente");

const Receita = db.define("Receita",
{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull:false
  }
});

Receita.belongsTo(Medico);
Medico.hasMany(Receita, {as:"receitas"});
Receita.belongsTo(Paciente);
Paciente.hasMany(Receita, {as:"receitas"});

module.exports = Receita;