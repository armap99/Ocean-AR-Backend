require("dotenv").config();
const app = require("./app");
const sequelize = require("./db");

sequelize.sync();
sequelize.sync({ force: true });

app.listen(app.get("port"));
