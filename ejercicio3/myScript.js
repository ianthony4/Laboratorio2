let ahora = new Date();
let year = ahora.getFullYear();
let diaFestivo = new Date(year, 7, 15);

if (ahora.getMonth() == 7 && ahora.getDate() > 15){
    let year += 1;
    diaFestivo.setFullYear(year);
}


