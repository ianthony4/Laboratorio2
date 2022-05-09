//Función que muestra el texto invertido
function showAnswer(){
  let texto = document.getElementById("texto").value;
  let respuesta = document.getElementById("respuesta");
  
  let palabraInvertida = reverseText(texto);
  respuesta.innerHTML = `<h3>${palabraInvertida}</h3>`;
}
function reverseText(text){
  let answer = "";
  for (let i = 0; i <= text.length; i++) {
    answer += text.substr(text.length - i, 1);
  }
  return answer;
}