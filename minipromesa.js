let empleados = [{
        id: 1,
        nombre: 'Juan'

    },

    {
        id: 2,
        nombre: 'LOL'

    },
    {
        id: 3,
        nombre: 'pedro'

    }
]

let salarios = [{
        id: 1,
        salario: 20

    },

    {
        id: 2,
        salario: 20200

    },


]


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {


        let valor = empleados.find(empleado => empleado.id === id)
        if (!valor) {
            reject(`no existe el usuario ${ id }`)
            reject(`no existe  ${ id }`)
            console.log('codigo');

        } else {

            resolve(valor);
        }




    });

};


//get sueldo 


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }


    });
}



getEmpleado(1).then(empleado => {
    // // console.log(result);
    // getSalario(empleado).then(resp => {
    //     console.log(`EL SALARIO ES ${resp.nombre} es de ${resp.salario}`);
    // }, err => console.log(err));

    //encadenar promesas 
    return getSalario(empleado);
    // }, err => console.log(err));
}).then(resp => {

    console.log(`${resp.nombre} ${resp.salario}`);

}).catch(err => { console.log(err) });