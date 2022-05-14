const { getUserById, createUser, updateUser } = require("../services/user.service");

module.exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserById(id);
        res.status(200).json({ data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};

module.exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await createUser({ name, email, password });
        res.status(201).json({ data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};

module.exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const user = await updateUser(id, { name, email, password });
        res.status(200).json({ data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server internal error", err: error });
    }
};
