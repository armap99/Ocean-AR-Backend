const User = require("../models/User");

module.exports.getUserById = async (id) => {
    try {
        return await User.findByPk(id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.createUser = async (body) => {
    try {
        const { name, email, password } = body;
        return await User.create({
            Name: name,
            Email: email,
            Password: password
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.updateUser = async (id, body) => {
    try {
        const { name, email, password } = body;
        return await User.update({
            Name: name,
            Email: email,
            Password: password
        }, {
            where: {
                Id: id
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.getUserByEmail = async (email, password) => {
    try {
        return await User.findOne({
            where: {
                Email: email,
                Password: password
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};
