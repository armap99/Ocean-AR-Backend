const cors = require("cors");

const express = require("express");
const app = express();

app.set("port", process.env.PORT || 5000); // process.env.PORT te obtiene el puerto del hosting

app.use(express.json()); // para que acepte json
app.use(express.urlencoded({ extended: true })); // para que acepte formularios
app.use(cors()); // para poder aceptar peticiones de otros puertos

app.use("/city", require("./routes/city.routes"));
app.use("/animal", require("./routes/animal.routes"));

module.exports = app; // exportar aplicacion