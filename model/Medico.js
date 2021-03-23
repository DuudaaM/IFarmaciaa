const {Sequelize, DataTypes} = require("sequelize");
const cors = require('cors');
const express = require("express");
const db = require("../db");


const Medico = db.define("Medico"),
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

        crm: {
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

module.exports = Medico;
