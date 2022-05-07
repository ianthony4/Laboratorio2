let botonCrear = document.getElementById("crearTabla");
let cantidadValores = "";
let tabla = "";
let botonSuma = "";
let arregloValores = [];

botonCrear.addEventListener("click", crearTabla);

function crearTabla(){
    cantidadValores = document.getElementById("valores").value;

    tabla = `<table>
    <tr>
        <th>Valores</th>
    </tr>`;
    alert("Le dio al boton");
    for(let i = 0; i < cantidadValores; i++){
        let numero = aleatorio();
        arregloValores.push(numero);
        tabla += "<tr><td>"+numero+"</td></tr>";
    }
    tabla += "</table>";
    botonSuma = `<button type="button" id="suma">Calcular suma</button>`;
    document.getElementById("tabla").innerHTML = tabla + botonSuma;
}

botonSuma.addEventListener("click", sumaTotal);

function sumaTotal(){
    
}

function aleatorio(){
    return parseInt((Math.random()*100)+1);
}