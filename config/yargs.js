const opciones = {
    base: {
        demand: true,
        alias: "b",
    },
    limite: {
        alias: "l",
        default: "10",
    },
};

const argv = require("yargs")
    .command("listar", "Listar la tabla de multiplicar", opciones)
    .command("crear", "Crear la tabla de multiplicar", opciones)
    .help().argv;

module.exports = {
    argv,
};