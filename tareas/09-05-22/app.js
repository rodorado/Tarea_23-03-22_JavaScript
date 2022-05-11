let numero;

const iniciarJuego = function(){
   
    numero = Math.ceil(Math.random() * 10);
    document.getElementById('iniciar').disabled = true; //Desabilitar el botón una vez ganado el juego
    console.log(numero); 
};

function adivinarNumero(){
    let numeroJugador = document.getElementById('jugador').value;
    console.log(`El número del jugador es: ${numeroJugador}`);

    if(numero == numeroJugador){
    alert("¡Adivinaste el número! ¡GANASTE! 🤩");
    document.getElementById("jugador").value='';
    document.getElementById("jugador").focus();
    document.getElementById('iniciar').disabled = false; //Habilitar el botón una vez ganado para jugar
    } else if(numero < numeroJugador){
      alert("El numero  ingresado es MAYOR que el número mágico 😓");
      document.getElementById("jugador").select();
    }else{
        alert("El numero  ingresado es MENOR que el número mágico 😓")
    }
}