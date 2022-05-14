const City = require("../models/City");

module.exports.getAllCities = async () => {
    try {
        return await City.findAll();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.getCityById = async (id) => {
    try {
        return await City.findByPk(id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.createCity = async (body) => {
    try {
        const { name, urlImage, urlMap } = body;
        return await City.create({
            Name: name,
            UrlImage: urlImage,
            UrlMap: urlMap
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.updateCity = async (id, body) => {
    try {
        const { name, urlImage, urlMap } = body;
        return await City.update({
            Name: name,
            UrlImage: urlImage,
            UrlMap: urlMap
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
