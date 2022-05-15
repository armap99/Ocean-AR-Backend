const { Sequelize } = require("sequelize");
const { DB_URI } = require("./dbConfig");
const sequelize = new Sequelize(DB_URI);

console.log("DB Connected");

module.exports = sequelize;
