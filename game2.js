import Funciones from "./funciones.js";

export function iniciarJuego() {
  const gameArea = document.querySelector(".gameAreas");
  if (!gameArea) {
    console.error("No se encontró .gameArea");
    return;
  }
  
//////////////////////
// Valores iniciales del juego
  const myWords = ["perro", "gato", "raton", "esternocleidomastoideo", "cerdo", "pollito"];
  const funciones = new Funciones(myWords);

  const btn = document.createElement("button");
  const output = document.createElement("div");
  const palmezc = document.createElement("div");
  const btnrr = document.createElement("button");
  const temp = document.createElement("div");

  btn.textContent = "Iniciar Juego";
  btnrr.textContent = "Regresar al menú de juegos";
  output.textContent = "Clic en el botón (el juego es de completar la palabra dando click a los botones)";
// Agregar a la pagina del HTML
  gameArea.appendChild(output);
  gameArea.appendChild(btn);
  gameArea.appendChild(palmezc);
  gameArea.appendChild(btnrr);
  gameArea.appendChild(temp);
/////////////////boton reinicio g2
  btnrr.addEventListener("click", () => location.reload());

  // evento click del boton
  btn.addEventListener("click", () => {
    funciones.game.letindice = 0;;//reinicar indice cada click
    funciones.iniciarTemporizador(temp, output, btn, palmezc);

    myWords.sort(() => 0.5 - Math.random());// Ordenamos las palabras de forma aleatoria
    funciones.game.sel = myWords[0];// Seleccionamos la primera palabra
    funciones.game.scramble = funciones.sorter(funciones.game.sel);// Llamamos a la funcion sorter
     // Mostramos la palabra en el contenedor
    output.textContent = `${funciones.game.sel} es la palabra seleccionada /// ${funciones.game.scramble} es la palabra mezclada`;

     ///////uso de otro contenedor
    palmezc.innerHTML = `<br>Palabra: <br>`;
    funciones.game.scramble.split("").forEach((letra) => {
      const botonLetra = document.createElement("button"); //crear botones para cada letra
      botonLetra.textContent = letra;//asignamos cada letra a los botones.
      botonLetra.style.fontSize = "60px";

      botonLetra.addEventListener("click", () => //agregar funcion de click al boton
        funciones.checkLetter(letra, botonLetra, output, palmezc, btn));//llamamos a las dunciones
        
      palmezc.appendChild(botonLetra);;/// agregamos al contenedor
    });
  });
}
