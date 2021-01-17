const fs = require("fs");

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log(base);
        if (!Number(base)) {
            reject("la base debe ser un numero");
            return;
        }

        let data = "";
        let nombreArc = `tabla_del_${base}.txt`;

        for (let i = 0; i < limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`arc/${nombreArc}`, data, (err) => {
            if (err) reject(err);
            else resolve(nombreArc);
        });
    });
};

let listar = (base, limite) => {
    for (let i = 0; i < limite; i++) {
        console.log(`${base} * ${i} = ${base * i} `);
    }
};

module.exports = {
    crearArchivo,
    listar,
};