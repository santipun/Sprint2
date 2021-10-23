
// https://www.w3schools.com/jsref/jsref_match.asp 
// con match se puede hacer la validacion de cadenas de texto
// https://www.w3schools.com/js/js_regexp.asp
// con test se puede hacer la validacion de patrones

/*===================LEER PARA COMPRENSION DE LA FUNCION VALIDAR_NOMBRE_USUARIO===================
Expresión regular:
-retorna 0 cuando hay coincidencias exactas con las restricciones
-retorna -1 cuando no hay coincidencias

-retorna otros valores numericos cuando hay n cantidad de coincidencias. Por esta razón para tener en cuenta esos casos los condicionales
usan el operador != -1, se tiene en cuenta solo los casos erroneos*/

function validar_nombre_usuario(name){
    if(name.startsWith(" ") == false && name.endsWith(" ") == false){  //verifica si el texto no inicia ni finaliza con espacios
        if(name.search(/[0-9]/) == -1){  //verifica si no hay numeros en la cadena
            if(name.search(/ /) != -1){  //verifica si hay espacios en la cadena
                let listaPalabras = name.split(' ');
                let listaValida = true;
                for (let i = 0; i < listaPalabras.length; i+=1) {
                    if(listaPalabras[i][0].search(/[A-Z]/) != -1){
                        listaValida = true;
                    } else {
                        listaValida = false;    
                        break;
                    }
                }
                return listaValida;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function validar_edad_usuario(edad){
    if( typeof parseInt(edad) == 'number' && /^\d+$/.test(edad) == true && edad > 0 && edad >= 13 && edad < 110 ){
        return true;
    }else{
        return false;
    }
}

function validar_contrasena(contrasena) {
    if (/^[A-Za-z0-9]+$/.test(contrasena) == true && contrasena.length >= 6 ) {
        return true;
    }else{
        return false;
    }
}


module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.validar_contrasena = validar_contrasena;
