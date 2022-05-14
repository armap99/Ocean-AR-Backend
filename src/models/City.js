const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const City = sequelize.define("City", {
    Id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UrlImage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UrlMap: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: "City",
    timestamps: false
}
);

module.exports = City;
