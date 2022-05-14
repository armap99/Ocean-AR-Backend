const { getAllCities } = require("../services/city.service");

module.exports.getAllCities = async (req, res) => {
    try {
        const cities = await getAllCities();
        res.status(200).json(cities);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
