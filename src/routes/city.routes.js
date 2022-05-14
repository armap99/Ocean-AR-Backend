const router = require("express").Router();
const { isAuthorized } = require("../middlewares/isAuthorized");
const { getAllCities } = require("../controllers/city.controller");

router.get("/all", [isAuthorized], getAllCities);

module.exports = router;
