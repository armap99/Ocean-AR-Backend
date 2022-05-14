const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("oceanar", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

console.log("DB Connected");

module.exports = sequelize;
