'use strict';

const number = document.querySelector('.js_number');
const bet = document.querySelector('.js_bet');
const result = document.querySelector('.js_result');
const money = document.querySelector('.dinero');
const btnPlay = document.querySelector('.btnPlay');

function getRandomNumber() {
  return Math.ceil(Math.random() * 6);
}

function desactivarJuego() {
  number.disabled = true;
  bet.disabled = true;
  play.disabled = true;
}

function jugar() {
  event.preventDefault();
  const seleccionado = parseInt(number.value);
  const apuesta = parseInt(bet.value);

  const dado = getRandomNumber();

  if (seleccionado === dado) {
    const ganancia = parseInt(bet.value) * 2;
    result.innerHTML = 'Has ganado el doble de lo apostado.';
    result.innerHTML += ' Ganaste ' + ganancia + ' euros.';
    if (ganancia >= 200) {
      result.innerHTML += ' ¡Has llegado a 200 euros! ¡Ganaste el juego!';
      desactivarJuego();
    }
    dinero += ganancia;
  } else {
    result.innerHTML = 'Has perdido lo apostado.';
    if (apuesta >= 50) {
      result.innerHTML += ' Perdiste todo tu dinero. ¡Perdiste el juego!';
      desactivarJuego();
    }
    dinero -= apuesta;
    if (dinero < 0) {
      money = 0;
    }
  }

  money.innerHTML = 'Saldo: ' + dinero + ' euros';

  if (apuesta >= 50) {
    bet.value = 50;
  }
}

let dinero = 50;

btnPlay.addEventListener('click', jugar);
