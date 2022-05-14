const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Animal = sequelize.define("Animal", {
    Id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IdCity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},
{
    tableName: "Animal",
    timestamps: false
});

module.exports = Animal;