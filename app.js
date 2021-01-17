const argv = require("./config/yargs").argv;
const { crearArchivo, listar } = require("./multiplicar/multiplicar"); // con destructuracion

let comando = argv._[0];

switch (comando) {
    case "listar":
        listar(argv.base, argv.limite);
        break;

    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch((e) => (e = console.log(e)));
        break;

    default:
        console.log("Comando no reconocido");
        break;
}
/*


    */