const { getAllCities, getCityById, createCity, updateCity } = require("../services/city.service");

module.exports.getAllCities = async (req, res) => {
    try {
        const cities = await getAllCities();
        res.status(200).json(cities);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};

module.exports.getCityById = async (req, res) => {
    try {
        const { id } = req.params;
        const city = await getCityById(id);
        res.status(200).json({ data: city });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};

module.exports.createCity = async (req, res) => {
    try {
        const { name, urlImage, urlMap } = req.body;
        const city = await createCity({ name, urlImage, urlMap });
        res.status(201).json({ data: city });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};

module.exports.updateCity = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, urlImage, urlMap } = req.body;
        const city = await updateCity(id, { name, urlImage, urlMap });
        res.status(200).json({ data: city });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};
