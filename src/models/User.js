const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("Usuario", {
    Id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    }

},
{
    tableName: "Usuario",
    timestamps: false
}
);

module.exports = User;
