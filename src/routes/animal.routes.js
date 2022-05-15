const router = require("express").Router();

const { getAnimalById, getAnimalByIdCity, createAnimal, updateAnimal } = require("../controllers/animal.controller");

router.post("/", createAnimal);
router.put("/:id", updateAnimal);
router.get("/:id", getAnimalById);
router.get("/city/:id", getAnimalByIdCity);

module.exports = router;
