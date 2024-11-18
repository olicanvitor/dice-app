const socket = io(); // Conectar ao servidor

// Selecionar elementos
const rollButton = document.getElementById('rollDice');
const resultDisplay = document.getElementById('result');
const historyList = document.getElementById('historyList');

// Função para gerar um número aleatório
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Atualizar o histórico na interface
function updateHistory(rolls) {
  historyList.innerHTML = ''; // Limpar histórico existente
  rolls.forEach((roll) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Você rolou: ${roll}`;
    historyList.appendChild(listItem);
  });
}

// Função para salvar no LocalStorage
function saveHistory(rolls) {
  localStorage.setItem('history', JSON.stringify(rolls)); // Salvar o histórico como uma string JSON
}

// Função para carregar o histórico do LocalStorage
function loadHistory() {
  const history = JSON.parse(localStorage.getItem('history')) || []; // Carregar o histórico ou um array vazio
  updateHistory(history); // Atualizar a interface com o histórico
}

// Carregar o histórico ao carregar a página
loadHistory();

// Enviar nova rolagem para o servidor
rollButton.addEventListener('click', () => {
  const result = rollDice();
  resultDisplay.textContent = result; // Mostrar resultado localmente

  // Carregar o histórico do LocalStorage
  const history = JSON.parse(localStorage.getItem('history')) || [];

  // Adicionar a nova rolagem ao histórico
  history.push(result);

  // Salvar o histórico atualizado no LocalStorage
  saveHistory(history);

  // Enviar resultado para o servidor
  socket.emit('newRoll', result);
});

// Ouvir atualizações do histórico do servidor
socket.on('updateHistory', (rolls) => {
  updateHistory(rolls);
});
