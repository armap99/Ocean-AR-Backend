const { Sequelize } = require("sequelize");
const { DB_URI } = process.env;
console.log(DB_URI, ">>>>>>>>>>>>>>>");
const sequelize = new Sequelize(DB_URI);

console.log("DB Connected");

module.exports = sequelize;
