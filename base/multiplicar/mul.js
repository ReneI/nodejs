// requiere
const fs = require('fs');

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {


        let data = '';
        for (let i = 1; i <= 10; i++) {

            data += `${base}*${i}= ${i*base}\n`;

        }
        fs.writeFile('message.txt', data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla ${base}`)
            console.log('The file has been saved!');
        });



    });
}