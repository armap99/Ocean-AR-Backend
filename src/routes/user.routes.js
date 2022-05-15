const router = require("express").Router();
const { getUserById, createUser, updateUser, getUserByEmail } = require("../controllers/user.controller");

router.post("/", createUser);
router.post("/login", getUserByEmail);
router.put("/:id", updateUser);
router.get("/:id", getUserById);

module.exports = router;
