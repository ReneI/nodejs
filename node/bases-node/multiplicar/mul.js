const fs = require('fs');
// funcion con promesa normal 


let listar = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject(`No es un numero ${ base }`)
                return;
            }
            let data = '';


            for (let i = 1; i <= limite; i++) {
                data += `${base}*${i}= ${ base*i}\n`;
            }

            resolve(data);


        }

    )

};
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject('No es un numero')
                return;
            }
            let data = '';


            for (let i = 1; i <= 10; i++) {
                data += `${base}*${i}= ${ base*i}\n`;
            }
            fs.writeFile('message2.txt', data, (err) => {
                if (err) throw reject(er)
                else
                    resolve(`table-${base}.txt`);


            });

        }

    )

}

module.exports = {
    crearArchivo,
    listar
};