let ahora = new Date();
let year = ahora.getFullYear();
let diaFestivo = new Date(year, 7, 15);

if (ahora.getMonth() == 7 && ahora.getDate() > 15){
    year += 1;
    diaFestivo.setFullYear(year);
}

let diasFaltantes = (diaFestivo.getTime() - ahora.getTime()) / 1000 * 60 * 60 * 24; //esta operacion significa cuantos milisegundos hay en un dia

document.getElementById("dias").innerHTML = diasFaltantes;


