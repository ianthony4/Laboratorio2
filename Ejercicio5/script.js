let botonCrear = document.getElementById("crearTabla");
let cantidadValores = "";
let tabla = "";

botonCrear.addEventListener("click", crearTabla);
function crearTabla(){
    cantidadValores = document.getElementById("valores").value;

    tabla = `<table>
    <tr>
        <th>Valores</th>
    </tr>`;
    alert("Le dio al boton");
    for(let i = 0; i < cantidadValores; i++){
        tabla += "<tr><td>"+aleatorio()+"</td></tr>";
    }
    tabla += "</table>";
    document.getElementById("tabla").innerHTML = tabla;
}
function aleatorio(){
    return parseInt((Math.random()*100)+1);
}