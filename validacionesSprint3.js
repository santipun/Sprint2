let registros = [];

//Funcion realizada por Marcela
function agregarRegistro(){
    let usuario = document.getElementById('dato_nombre_usuario');  
    let edad = document.getElementById('dato_edad_usuario');
    let contrasena = document.getElementById('dato_contrasena');
    let datos = new Object(usuario, edad, contrasena);
    registros.push(datos); 
}

function OrdenarArreglo(arreglo){
    //implementacion
}

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
