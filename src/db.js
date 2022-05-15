const { Sequelize } = require("sequelize");
const { DB_URI } = process.env;
console.log(DB_URI, ">>>>>>>>>>>>>>>", process.env);
const sequelize = new Sequelize(DB_URI, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

console.log("DB Connected");

module.exports = sequelize;
