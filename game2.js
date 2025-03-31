

export function iniciarJuego() {
  const gameArea = document.querySelector(".gameAreas");



  if (!gameArea) {
      console.error("No se encontró .gameArea");
      return;

    
  }
const btn = document.createElement("button"); // Creamos el boton de inicio del juego
const output = document.createElement("div"); // Creamos el contenedor de las palabras
const palmezc= document.createElement("div"); // contenedoor seleccion de palarbas
const btnrr = document.createElement("button"); // Creamos el boton de inicio del juego


btn.textContent = "Iniciar Juego"; // Texto del boton
btnrr.textContent= "regresar al menu de juegos"
output.textContent = "Clic en el boton"; // Texto del contenedor de las palabras
console.log(btn);


// Agregar a la pagina del HTML
gameArea.appendChild(output);
gameArea.appendChild(btn);
gameArea.appendChild(palmezc);
gameArea.appendChild(btnrr);
/////////////////boton reinicio g2




btnrr.addEventListener("click", function (e) { //funcion del contenedor

  location.reload(); // Esto recarga la página y te lleva al inicio de todo
  
});

//////////////////////
// Valores iniciales del juego
const myWords = ["perro", "gato", "raton", "esternocleidomastoideo", "cerdo", "pollito"];
const game = {
  sel: "",
  scramble: "",
  letindice: 0,
};
// evento click del boton
const temp= document.createElement("div"); // crear temporizaodr
gameArea.appendChild(temp);//agregar al contenedor
let tiempo; //crear la variable
btn.addEventListener("click", function (e) {
 
  game.letindice= 0;//reinicar indice cada click


  
  if (tiempo) clearInterval(tiempo); //reiniciar temporizador

  let tiempo2=10;

  tiempo = setInterval(() => {
    tiempo2--;
    temp.textContent = `Tiempo: ${tiempo2}s`;

    if (tiempo2 <= 0) {
      clearInterval(tiempo);
      output.textContent = " ¡Tiempo agotado! Perdiste.";
      btn.disabled = false;
      palmezc.innerHTML = "";  // Limpiamos los botones
    }
  }, 1000);

  temp.textContent = `Tiempo: ${tiempo2}s`;
  myWords.sort(() => {

    return 0.5 - Math.random();
  }); // Ordenamos las palabras de forma aleatoria
  game.sel = myWords[0]; // Seleccionamos la primera palabra
  game.scramble = sorter(game.sel); // Llamamos a la funcion sorter
  output.textContent = `${game.sel} es la palabra seleccionada
  /// ${game.scramble} es la palabra mezclada`; // Mostramos la palabra en el contenedor

  ///////uso de otro contenedor
  
  palmezc.innerHTML= `<br>palabra:<br>`
  game.scramble.split("").forEach((letras,index) => { //separamos y recorremos para crear botones para cada palabra
    const botonesletra= document.createElement("button"); //crear botones para cada letra
    botonesletra.textContent= letras; //asignamos cada letra a los botones.
    botonesletra.style.fontSize = "60px";
    
    
    botonesletra.addEventListener("click", function(){ //agregar funcion de click al boton
     checkLetter(letras,index,  botonesletra);//llamamos a las dunciones
     console.log(`Botón clickeado: ${letras}`);//mostrar en la consola
    });
    palmezc.appendChild(botonesletra);/// agregamos al contenedor

  });
  const inst2 = document.createElement("span");
  inst2.style.fontSize = "60px";
  inst2.textContent = game.scramble;
  palmezc.appendChild(document.createElement("br"));
  palmezc.appendChild(inst2);
  
  // Aplicar estilos al contenedor
  palmezc.style.fontSize = "30px";
  console.log(game.sel, game.scramble);

});

function sorter(word) {
  let temp = word.split(""); // Separamos la palabra en letras
  temp.sort(() => {
    return 0.5 - Math.random();
  }); // Ordenamos las letras de forma aleatoria
  temp = temp.join(""); // Unimos las letras

  console.log(temp); // Mostramos la palabra en consola
  
  if (word === temp) {
    console.log(word, temp);
    return sorter(word); // Si la palabra es igual a la palabra ordenada, llamamos a la funcion sorter
  }
  return temp; // Retornamos la palabra ordenada
  //salida de letras
}
// Función para verificar si la letra seleccionada es correcta
function checkLetter(letras,index,  button) {
  button.disabled = true;

  if (letras === game.sel[game.letindice]) {
    button.style.backgroundColor = "green"; // Cambiar color a verde si es correcta
    game.letindice++; // Pasar al siguiente índice de la palabra correcta
    if (game.letindice === game.sel.length) {
      output.textContent = "¡Felicidades! pasa al siguiente nivel";
      clearInterval(tiempo); // Aquí es donde se detiene el temporizador
      const button2 = document.createElement("button"); // Creamos el boton de siguiente nivel
      button2.textContent= "Siguiente nivel."; //contenido del boton
      palmezc.appendChild(button2); //agregamos al contenedor
      button2.addEventListener("click", function (e) { //funcion del contenedor
        btn.click();
      });
    }
  } else {
    button.style.backgroundColor = "red"; // Cambiar color a rojo si es incorrecta
    palmezc.textContent="perdiste plep. "
    
    clearInterval(tiempo); // Aquí es donde se detiene el temporizador
    const button3 = document.createElement("button"); // Creamos el boton de siguiente nivel
      button3.textContent= "Repetir."; //contenido del boton
      palmezc.appendChild(button3);
      button3.addEventListener("click", function (e) { //funcion del contenedor
        btn.click();
        
      });
    console.log("Incorrecto. Intenta otra vez.");
  }
}
}