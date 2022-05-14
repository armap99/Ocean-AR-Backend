const { getAnimalById, getAnimalByIdCity, createAnimal, updateAnimal } = require("../services/animal.service");

module.exports.getAnimalById = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await getAnimalById(id);
        res.status(200).json({ data: animal });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};

module.exports.getAnimalByIdCity = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await getAnimalByIdCity(id);
        res.status(200).json({ data: animal });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};

module.exports.createAnimal = async (req, res) => {
    try {
        const { name, description, idCity } = req.body;
        const animal = await createAnimal({ name, description, idCity });
        res.status(200).json({ data: animal });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};

module.exports.updateAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, idCity } = req.body;
        const animal = await updateAnimal(id, { name, description, idCity });
        res.status(200).json({ data: animal });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};
