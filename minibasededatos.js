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


let getEmpleado = (id, call) => {
    let valor = empleados.find(empleado => empleado.id === id)



    if (!valor) {
        call(`no existe  ${ id }`)

    } else {

        call(null, valor)
    }
};


let getSalario = (emp, call) => {

    let sala = salarios.find(salar => salar.id === emp.id)
    console.log(sala);

    if (!sala) {
        call(`no existe  ${ emp.nombre }`)

    } else {

        call(null, {

            nombre: emp.nombre,
            salario: sala.salario,
            id: sala.id
        })
    }


}



getEmpleado(2, (error, emp) => {
    if (error) {

        return console.log(error);
    }
    console.log(emp);
    getSalario(emp, (err, res) => {
        if (err) {

            return console.log(err);
        }
        return console.log(`El salario de ${res.id} ${res.nombre} ${res.salario}`);
    })

});