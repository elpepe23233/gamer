export default class Funciones{


   constructor(myWords, gameArea, output, scoreBoard, inWord, btn) {
    this.myWords = myWords;
    this.gameArea = gameArea;
    this.output = output;
    this.scoreBoard = scoreBoard;
    this.inWord = inWord;
    this.btn = btn;
    this.game = {
      sel: "",
      scramble: "",
      correct: 0,
      incorrect: 0,
      wordsLeft: 0,
      played: myWords.length,
    };
  }
 reiniciarJuego() { 
    // Reiniciamos los valores
    this.game.sel = "";
    this.game.scramble = "";
    this.game.correct = 0;
    this.game.incorrect = 0;
    this.game.wordsLeft = this.myWords.length;
    this.game.played = this.myWords.length;
    
  
    // Restaurar el array de palabras original
    this.myWords.length = 0; // Vaciar el array
    this.myWords.push("cocodrilo", "gato", "raton"); // Reinsertar las palabras originales
  
    // Volver a mostrar los elementos del juego
    this.inWord.disabled = false;
    this.btn.style.display = "inline";
    this.inWord.style.display = "inline";
    this.scoreBoard.style.display = "block";
    this.output.textContent = "Clic en el botón";
  
    this.btn.textContent = "Iniciar Juego";// Restaurar el contenido del botón a "Iniciar Juego"
  
    // Reajustar el puntaje
    this.addScore();

  }




   addScore() {
      let tempOutput = `Correctas: <b>${this.game.correct}</b> VS incorrectas: <b>${this.game.incorrect}</b> <small>Palabras restantes: ${this.game.wordsLeft}</small>`;
      this.scoreBoard.innerHTML = tempOutput;
    }
    


    
    winChecker() {
      this.inWord.style.borderWidth = "5px";
      if (this.inWord.value === this.game.sel) {
        console.log("Ganaste");
        this.inWord.style.borderColor = "green";
        this.game.correct++;
        this.addScore();
        this.inWord.disabled = true;
        this.btn.style.display = "inline";
        this.btn.textContent = "Siguiente Palabra";
        this.inWord.value = "";
      } else {
        this.inWord.style.borderColor = "red";
        console.log("Perdiste");
        this.inWord.value = "";
        this.inWord.focus();
        this.game.incorrect++;
        this.addScore();
      }
    }
    
    
sorter(word) {
  let temp = word.split(""); // Separamos la palabra en letras
  temp.sort(() => {
    return 0.5 - Math.random();
  }); // Ordenamos las letras de forma aleatoria
  temp = temp.join(""); // Unimos las letras
  console.log(temp); // Mostramos la palabra en consola
  if (word === temp) {
    console.log(word, temp);
    return this.sorter(word); // Si la palabra es igual a la palabra ordenada, llamamos a la funcion sorter
  }
  return temp; // Retornamos la palabra ordenada
}
  
}

  