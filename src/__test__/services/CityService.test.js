const { getAllCities, createCity, getCityById } = require("../../services/city.service");

describe("CityServices", () => {
    test("1.1)Obtener todas las cities", async () => {
        const prueba = await getAllCities();
        expect(prueba.length).toBeGreaterThanOrEqual(0);
    });
    test("1.2)Agregar una ciudad", async () => {
        const body = {
            name: "Ciudad de prueba",
            urlImage: "https://www.google.com",
            urlMap: "https://www.google.com"
        };
        const prueba = await createCity(body);
        expect(prueba.Name).toBe(body.name);
    });
    test("1.3)Obtener una ciudad por id", async () => {
        const prueba2 = await getCityById(1);
        expect(prueba2.Name).toBe("Ciudad de prueba");
    });
});
