let deapool = {



    nombre: 'rolo',
    apellido: 'pero',
    apellidos: 'amigo',
    poder: 'Regeneracion',
    getNombre: function() {

        return `${this.nombre} ${this.apellido}`
    }
}

console.log(deapool.getNombre());


let {
    nombre: nom,
    apelldo,
    poder
} = deapool;

console.log(nom);

let sumar = (a, v) => {
    return a + v;

}
console.log(sumar(2, 4));


let getUsuario = (id, call) => {
    let usuario = {

        nombre: 'Fer',
        id
    }
    if (id === 20) {
        call(`no ${id}`);
    } else {
        call(null, usuario);
    }


}



getUsuario(2, (error, usuario) => {
    if (error) {
        console.log(error);
    } else {
        console.log
    }

});