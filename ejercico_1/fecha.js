function respuesta() {
    let dia = document.getElementById("num").value;
    console.log(dia);
    const days = ["Domingo" , "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let day = days[dia];
    console.log(day);
    document.getElementById("respuesta").innerHTML = day;
}