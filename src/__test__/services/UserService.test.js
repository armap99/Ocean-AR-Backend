const { getUserById, createUser, updateUser } = require("../../services/user.service");

describe("UserServices", () => {
    test("1.1)Crear un usuario", async () => {
        const body = {
            name: "Juan",
            email: "juan@hotmail.com",
            password: "123456"
        };
        const prueba = await createUser(body);
        expect(prueba.Name).toBe(body.name);
    });
    test("1.2)Obtener un usuario por id", async () => {
        const prueba = await getUserById(1);
        expect(prueba.Name).toBe("Juan");
    });
    test("1.3)Actualizar un usuario", async () => {
        const body = {
            name: "Juan",
            nmail: "otro@hotmail.com",
            password: "123456"
        };
        const prueba = await updateUser(1, body);
        expect(prueba.Email).toBe(body.email);
    });
});
