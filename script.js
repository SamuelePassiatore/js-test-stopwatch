// Recupero elementi in pagina
const displayElement = document.getElementById('display');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const pauseButton = document.getElementById('pause-button');

let timer;
let count;
let isPaused = false;

// Start button
startButton.addEventListener('click', () => {
  // Gestiamo l'abilitazione dei bottoni
  startButton.disabled = true;
  stopButton.disabled = false;
  pauseButton.disabled = false;

  count = 0;
  displayElement.innerText = count;

  timer = setInterval(() => {
    displayElement.innerText = ++count;
  }, 1000);
});

// Pause button
pauseButton.addEventListener('click', () => {
  // Clicco e inverto la situazione
  isPaused = !isPaused;

  if (isPaused) {
    pauseButton.innerText = 'RESUME';
    clearInterval(timer);
  } else {
    pauseButton.innerText = 'PAUSE';
    timer = setInterval(() => {
      displayElement.innerText = ++count;
    }, 1000);
  }
});

// Stop button
stopButton.addEventListener('click', () => {
  // Gestiamo l'abilitazione dei bottoni
  startButton.disabled = false;
  stopButton.disabled = true;
  pauseButton.disabled = true;

  clearInterval(timer);
});