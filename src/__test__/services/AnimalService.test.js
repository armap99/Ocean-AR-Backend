const { getAnimalById, getAnimalByIdCity, createAnimal, updateAnimal } = require("../../services/animal.service");

describe("AnimalService", () => {
    test("1.1)createAnimal", async () => {
        const body = {
            name: "Animal de prueba",
            description: "Descripcion de prueba",
            idCity: 1
        };
        const prueba = await createAnimal(body);
        expect(prueba.Name).toBe(body.name);
    });
    test("1.2)getAnimalById", async () => {
        const prueba = await getAnimalById(1);
        expect(prueba.Name).toBe("Animal de prueba");
    });
    test("1.3)getAnimalByIdCity", async () => {
        const prueba = await getAnimalByIdCity(1);
        expect(prueba.length).toBeGreaterThanOrEqual(0);
    });
    test("1.4)updateAnimal", async () => {
        const body = {
            name: "Animal de pruebacambio",
            description: "Descripcion de prueba",
            idCity: 1
        };
        const prueba = await updateAnimal(1, body);
        expect(prueba.Name).toBe(body.name);
    });
});
