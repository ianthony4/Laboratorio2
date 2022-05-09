function seleccion(){
    let str = document.getElementById(link).value;
    let substr;
    if(str.length == 28){
        substr = str.slice(16,19)+str.slice(20,24)+str.slice(25,28);
        document.getElementById("respuesta").innerHTML = substr;
    }else if(str.length == 36){
        substr = str.slice(24,27)+str.slice(28,32)+str.slice(33,36);
        document.getElementById("respuesta").innerHTML = substr;
    }
}