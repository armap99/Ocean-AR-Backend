const router = require("express").Router();
const { getUserById, createUser, updateUser } = require("../controllers/user.controller");

router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/:id", getUserById);

module.exports = router;
