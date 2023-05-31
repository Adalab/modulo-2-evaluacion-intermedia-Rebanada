'use strict';
function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  }
  
  function desactivarJuego() {
    document.querySelector('.js_number').disabled = true;
    document.querySelector('js_bet').disabled = true;
    document.querySelector('js_play').disabled = true;
  }
  
  function jugar() {
    const seleccionado = parseInt(document.querySelector('.js_number').value);
    const apuesta = parseInt(document.querySelector('.js_bet').value);
    const resultadoDiv = document.querySelector('.js_result');
    const dineroElement = document.querySelector('.dinero');
    
    const dado = getRandomNumber();
    
    if (seleccionado === dado) {
      const ganancia = apuesta * 2;
      resultadoDiv.innerHTML = "Has ganado el doble de lo apostado.";
      resultadoDiv.innerHTML += " Ganaste " + ganancia + " euros.";
      if (ganancia >= 200) {
        resultadoDiv.innerHTML += " ¡Has llegado a 200 euros! ¡Ganaste el juego!";
        desactivarJuego();
      }
      dinero += ganancia;
    } else {
      resultadoDiv.innerHTML = "Has perdido lo apostado.";
      if (apuesta >= 50) {
        resultadoDiv.innerHTML += " Perdiste todo tu dinero. ¡Perdiste el juego!";
        desactivarJuego();
      }
      dinero -= apuesta;
      if (dinero < 0) {
        dinero = 0;
      }
    }
    
    dineroElement.innerHTML = "Saldo: " + dinero + " euros";
    
    if (apuesta >= 50) {
      document.querySelector(".js_bet").value = 50;
    }
  }
  
  let dinero = 50;
  
  document.querySelector(".js_play").addEventListener("click", jugar);
  