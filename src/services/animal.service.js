const Animal = require("../models/Animal");

module.exports.getAnimalById = async (id) => {
    try {
        return await Animal.findByPk(id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.getAnimalByIdCity = async (idCity) => {
    try {
        return await Animal.findAll({
            where: {
                IdCity: idCity
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.getAllAnimals = async () => {
    try {
        return await Animal.findAll();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.createAnimal = async (body) => {
    try {
        const { name, description, idCity } = body;
        return await Animal.create({
            Name: name,
            Description: description,
            IdCity: idCity
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.updateAnimal = async (id, body) => {
    try {
        const { name, description, idCity } = body;
        return await Animal.update({
            Name: name,
            Description: description,
            IdCity: idCity
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
