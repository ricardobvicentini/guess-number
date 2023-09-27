'use strict';

// Random Number Generation / Geração de Número Aleatório
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Variables / Variáveis
let score = 20;
let highscore = 0;
let count = 0;
let guess;
const attempt = [
  'I.',
  'II.',
  'III.',
  'IV.',
  'V.',
  'VI.',
  'VII.',
  'VIII.',
  'IX.',
  'XI.',
  'XII.',
  'XIII.',
  'XIV.',
  'XV.',
  'XVI.',
  'XVII.',
  'XVII.',
  'XVIII.',
  'XIX.',
  'XX',
];
const number = document.querySelector('.number');
const selectedNums = document.querySelector('.selected');
const againBtnEl = document.querySelector('.again');
const checkBtnEl = document.querySelector('.check');

// Display message function. / Função exibir mensagem.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Remove number function. / Função remover números selecionados.
const removeNumbers = function () {
  selectedNums.innerHTML = '';
};

// Click function. / Função 'clicar'.
checkBtnEl.addEventListener('click', () => {
  guess = Number(document.querySelector('.guess').value);
  count++;

  // When there is no input. / Quando nenhum número é inserido.
  if (!guess) {
    document.querySelector('.message').textContent = 'Please select a number!';

    // When player wins. / Quando o jogador ganha.
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to bottom, #60b347, #8dda76)';
    number.style.width = '30rem';

    // Keeping the highscore. / Manter o highscore.
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When number is too high or too low. / Quando o número maior ou menor.
  } else if (guess !== secretNumber) {
    // Add number function. / Função adicionar número selecionado.
    const addNumber = function () {
      selectedNums.innerHTML += `<span>(${count}) ${guess} </span>`;
    };
    addNumber();
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundImage =
        'linear-gradient(to bottom, #a31521, #e4636e)';
    }
  }
  guess = document.querySelector('.guess').value = '';
  guess = document.querySelector('.guess').focus();
});

// Reset game. / Reiniciar jogo.
againBtnEl.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  number.textContent = '?';
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to bottom, #081b29, #153247)';
  number.style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  guess = document.querySelector('.guess').value = '';
  removeNumbers();
  count = 0;
});
