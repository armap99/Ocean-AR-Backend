const { getAllCities } = require("../../services/city.service");

describe("CityServices", () => {
    test("1.1)Obtener todas las cities", async () => {
        const prueba = await getAllCities();
        expect(prueba.length).toBe(0);
    });
});
