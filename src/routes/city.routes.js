const router = require("express").Router();

const { getAllCities, getCityById, createCity, updateCity } = require("../controllers/city.controller");

router.get("/", getAllCities);
router.get("/:id", getCityById);
router.post("/", createCity);
router.put("/:id", updateCity);

module.exports = router;
