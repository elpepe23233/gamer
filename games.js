
import Funciones from './funciones.js';


export function iniciarJuego() {
  const gameArea = document.querySelector(".gameAreas");
  
  
  if (!gameArea) {
      console.error("No se encontró .gameArea");
      return;
  }

  gameArea.innerHTML = ""; // Limpiar el área antes de iniciar

  
const btn = document.createElement("button"); // Creamos el boton de inicio del juego
const output = document.createElement("div"); // Creamos el contenedor de las palabras
const inWord = document.createElement("input"); // Creamos el input para ingresar la palabra
const scoreBoard = document.createElement("div"); // Creamos el contenedor del puntaje
scoreBoard.style.fontSize = "2em"; // Tamaño de la fuente
scoreBoard.style.color = "#4C048C"; // Color del texto
scoreBoard.style.backgroundColor = "#FFD700"; // Color de fondo
inWord.setAttribute("type", "text"); // Tipo de input
inWord.classList.add("myInput"); // Clase de bootstrap
output.style.textAlign = "center"; // Alineamos el texto al centro
output.style.marginBottom = "10px"; // Margen inferior

//importar funciopnes

btn.textContent = "Iniciar Juego"; // Texto del boton
const btnr = document.createElement("button"); // Creamos el boton de inicio del juego
///////// BOTON DE REINCIO
btnr.textContent= "regresar al menu";
btnr.classList.add("button-moradoc");
btnr.style.marginTop = "10px"; // Establecer el margen superior de 10px
btn.classList.add("clicbot");
////////////boton de reinicio
btnr.addEventListener("click", function (e) { //funcion del contenedor
  location.reload(); // Esto recarga la página y te lleva al inicio de todo
});


///////////////////

    gameArea.style.display = "flex";
    gameArea.style.flexDirection = "column";
    gameArea.style.alignItems = "center"; // Centra todo de forma horizontla
    gameArea.style.justifyContent = "center"; // Centra todo vertical
 
    
output.textContent = "Click en el boton"; // Texto del contenedor de las palabras
output.style.fontSize = "4em"; // Tamaño de la fuente

console.log(btn);

// Agregar a la pagina del HTML
gameArea.appendChild(scoreBoard);
gameArea.appendChild(output);
gameArea.appendChild(inWord);
gameArea.appendChild(btn);
gameArea.appendChild(btnr);



// Elementos ocultos
inWord.style.display = "none";
scoreBoard.style.display = "none";

// Valores iniciales del juego
const myWords = ["cocodrilo", "gato", "raton"];
const funciones = new Funciones(myWords, gameArea, output, scoreBoard, inWord, btn);

const button3 = document.createElement("button"); // Creamos el boton de volver a jugar
button3.textContent= "Volver a jugar."; //contenido del boton
gameArea.appendChild(button3);
button3.style.display="none";
button3.classList.add("button-morado"); // Aplicamos la clase de CS

button3.style.cursor = "pointer"; // Cambia el cursor cuando está sobre el botón
const button4 = document.createElement("button"); // Creamos el boton de volver a jugar
button4.textContent= "Volver a la pantalla de inicio."; //contenido del boton
gameArea.appendChild(button4);
button4.style.display="none";
button4.classList.add("purplebotton2");



// evento click del boton
btn.addEventListener("click", function (e) {
  if (myWords.length === 0) {
      // Crear una barra amarilla arriba
  const yellowBar = document.createElement("div");
  yellowBar.style.backgroundColor = "#FFD700"; // Color amarillo
  yellowBar.style.height = "5px"; // Altura de la barra
  yellowBar.style.width = "100%"; // Ancho completo
  yellowBar.style.position = "absolute"; // Posicionamos la barra
  yellowBar.style.top = "0"; // Barra en la parte superior

  // Agregar la barra amarilla al contenedor del juego
  gameArea.appendChild(yellowBar);
    output.innerHTML= `<h2>Fin del juego</h2>`;
    output.innerHTML = `Correctas: <b>${funciones.game.correct}</b> VS incorrectas: <b>${funciones.game.incorrect}</b> <small>de ${funciones.game.played} palabras jugadas</small>`;
    output.style.backgroundColor = "#6A0DAD"; // Fondo morado
    inWord.disabled = true;
    btn.style.display = "none";
    inWord.style.display = "none";
    scoreBoard.style.display = "none";
    
button3.style.display="inline";
    button3.addEventListener("click", function (e) { //funcion del contenedor
      funciones.reiniciarJuego();
      btn.click();

      
    });
    button4.style.display="inline";
    button4.addEventListener("click", function (e) { //funcion del contenedor
      funciones.reiniciarJuego();
      output.textContent = "Clic en el botón";

      // Restaurar el contenido del botón a "Iniciar Juego"
      btn.textContent = "Iniciar Juego";
      inWord.style.display="none";
      button3.style.display="none";
      button4.style.display="none"

   
      
    });


  } else {
    
    button3.style.display="none";
    button4.style.display="none";
    inWord.disabled = false; // Habilitamos el input
    btn.style.display = "none"; // Ocultamos el boton
    inWord.style.display = "inline"; // Mostramos el input
    scoreBoard.style.display = "block"; // Mostramos el puntaje
    myWords.sort(() => {
      return 0.5 - Math.random();
    }); // Ordenamos las palabras de forma aleatoria
    funciones.game.sel = myWords.shift(); // Seleccionamos la primera palabra
    funciones.game.wordsLeft = myWords.length; // Cantidad de palabras restantes
    funciones.game.scramble = funciones.sorter(funciones.game.sel); // Llamamos a la funcion sorter
    funciones.addScore(); // Llamamos a la funcion addScore
    output.style.fontSize = "3em"; // Tamaño de la fuente
    inWord.setAttribute("maxlength", funciones.game.sel.length); // Maximo de caracteres del input
    console.log(funciones.game);
    inWord.focus(); // Enfocamos el input
    output.textContent = funciones.game.scramble; // Mostramos la palabra ordenada
    console.log(funciones.game.sel, funciones.game.scramble);
  }
});

inWord.addEventListener("keypress", (e) => {
  console.log(e);
  inWord.style.borderColor = "#4C048C";
  inWord.style.borderWidth = "1px";
  if (inWord.value.length === funciones.game.sel.length || e.code === "Enter") {
    console.log("verificando....");
    funciones.winChecker();
  }
});

}

