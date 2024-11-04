// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Crear una instancia de Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
})

module.exports = sequelize
