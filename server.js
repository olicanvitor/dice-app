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

// Enviar nova rolagem para o servidor
rollButton.addEventListener('click', () => {
  const result = rollDice();
  resultDisplay.textContent = result; // Mostrar resultado localmente
  socket.emit('newRoll', result); // Enviar resultado para o servidor
});

// Ouvir atualizações do histórico do servidor
socket.on('updateHistory', (rolls) => {
  updateHistory(rolls);
});
