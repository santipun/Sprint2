
// https://www.w3schools.com/jsref/jsref_match.asp 
// con match se puede hacer la validacion de cadenas de texto
// https://www.w3schools.com/js/js_regexp.asp
// con test se puede hacer la validacion de patrones

function validar_nombre_usuario(string) {
    //implementacion
}

function validar_edad_usuario(edad){
    if(typeof edad == 'number' && edad > 0 && edad >= 13 && edad < 110){
        return true;
    }else{
        return false;
    }
}

function validar_contrasena(string) {
    //implementacion
}


module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.validar_contrasena = validar_contrasena;