const app = require("./app");
const sequelize = require("./db");

app.listen(app.get("port"));
