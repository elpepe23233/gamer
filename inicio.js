
const gameAreas = document.querySelector(".gameAreas"); // Creamos el contenedor de elección
const btn1 = document.createElement("button"); // Creamos el boton de inicar juego 1
const btn2 = document.createElement("button"); // Creamos el boton de inicio del juego2
//const btn3 = document.createElement("button"); // Creamos el boton de inicio del juego2
// <img src="/inic/in.png" alt="log">   

btn1.textContent += "Juego1"; // Texto del boton
btn2.textContent += "Juego2 "; // Texto del boton
//btn3.textContent = "inicio de todo"

gameAreas.textContent="ELIJA CUALQUIERA DE LOS DOS JUEGOS";
gameAreas.style.color = "white"; // Establece el color del texto a blanco 
gameAreas.style.textAlign = "center"; // Alineamos el texto al centro
gameAreas.style.fontSize = "2em"; // Tamaño de la fuente

gameAreas.appendChild(btn1);
gameAreas.appendChild(btn2);
//gameAreas.appendChild(btn3);

btn1.classList.add("button-moradoc");
btn2.classList.add("button-moradoc");

//btn3.classList.add("button-moradoc");

btn1.addEventListener("click", async function () {
   
    try {
        const gameModule = await import('/games.js');
        gameModule.iniciarJuego(); // Llamamos la función para iniciar el juego
    } catch (error) {
        console.error("Error cargando el juego", error);
    }
    
});


 btn2.addEventListener("click", async function () {
    btn1.style.display = "none";
    btn2.style.display = "none";
    try {
        const gameModule = await import('/game2.js');
        gameModule.iniciarJuego(); // Llamamos la función para iniciar el juego
    } catch (error) {
        console.error("Error cargando el juego", error);
    }
    
});
