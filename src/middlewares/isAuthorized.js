const jwt = require("jsonwebtoken");

module.exports.isAuthorized = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const [bearer, token] = authorization.split(" ");
        jwt.verify(token, "Workick");
        next();
    } catch (error) {
        res.status(401).json({
            ok: false,
            statusCode: 401,
            message: "No autorizado",
            error
        });
    }
};
