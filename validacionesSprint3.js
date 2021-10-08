let registros = [];

//Funcion realizada por Marcela
function agregarRegistro(){
    let usuario = document.getElementById('dato_nombre_usuario');
    let edad = document.getElementById('dato_edad_usuario');
    let contrasena = document.getElementById('dato_contrasena');
    let datos = new Object(usuario, edad, contrasena);
    registros.push(datos);
}


function OrdenarArreglo(registros){
    //implementacion
    
    const ordenarPorEdad = (a,b)=>a.edad - b.edad;
    registros.sort(ordenarPorEdad);

    for(let i=0; i<registros.length; i++){
    console.log(registros[i]);
}

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;