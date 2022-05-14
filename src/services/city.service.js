const City = require("../models/City");

module.exports.getAllCities = async () => {
    try {
        return await City.findAll();
    } catch (error) {
        console.log(error);
        throw error;
    }
};
