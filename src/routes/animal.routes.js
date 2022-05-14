const router = require("express").Router();

const { getAnimalById, getAnimalByIdCity, createAnimal, updateAnimal } = require("../services/animal.service");

router.post("/", createAnimal);
router.put("/:id", updateAnimal);
router.get("/:id", getAnimalById);
router.get("/city/:id", getAnimalByIdCity);

module.exports = router;
