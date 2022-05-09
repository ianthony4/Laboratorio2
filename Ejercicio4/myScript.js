function seleccion(){
    let str = document.getElementById(link).value;
    let substr;
    if(str.length == 28){
        substr = str.slice(16,19)+str.slice(20,24)+str.slice(25,28);
        document.getElementById("respuesta").innerHTML = substr;
    }
}