const router = require("express").Router();
const { getUserById, createUser, updateUser } = require("../services/user.service");

router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/:id", getUserById);
