let botonCrear = document.getElementById("crearTabla");
let cantidadValores = "";
let tabla = "";
let botonSumaHtml = "";
let arregloValores = [];
let sumaT = 0;

botonCrear.addEventListener("click", crearTabla);

function crearTabla(){
    cantidadValores = document.getElementById("valores").value;
    tabla = `<table>
    <tr>
        <th>Valores</th>
    </tr>`;

    for(let i = 0; i < cantidadValores; i++){
        let numero = aleatorio();
        arregloValores.push(numero);
        tabla += "<tr><td>"+numero+"</td></tr>";
    }

    tabla += "</table><br>";
    botonSumaHtml = `<button type="button" id="suma">Calcular suma</button>`;
    document.getElementById("tabla").innerHTML = tabla + botonSumaHtml;

    let botonSuma = document.getElementById("suma");
    botonSuma.addEventListener("click", sumarValores);

    function sumarValores(){
        for(i = 0; i < arregloValores.length; i++){
            sumaT += arregloValores[i];
        }
        alert(`La suma de todos los números es: ${sumaT}`);
    }
}

function aleatorio(){
    return parseInt((Math.random()*100)+1);
}