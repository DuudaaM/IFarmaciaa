const {Sequelize, DataTypes} = require("sequelize");
const cors = require('cors');
const express = require("express");
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

console.exports = Farmacia;