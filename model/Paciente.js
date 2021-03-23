const {Sequelize, DataTypes} = require("sequelize");
const cors = require('cors');
const express = require("express");
const db = require("../db");



const Paciente = db.define("Paciente"),
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

        numero_sus: {
            type: DataTypes.STRING,
             allowNull: false
        },

        receita: DataTypes.STRING,  
        idade: DataTypes.STRING
    }
);

module.exports = Paciente;