// Função para gerar um número aleatório entre 1 e 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Selecionar elementos da interface
const rollButton = document.getElementById('rollDice');
const resultDisplay = document.getElementById('result');
const historyList = document.getElementById('historyList');

// Adicionar evento de clique ao botão
rollButton.addEventListener('click', () => {
  const result = rollDice(); // Rolar o dado
  resultDisplay.textContent = result; // Mostrar o resultado
  addToHistory(result); // Adicionar ao histórico
});

// Função para adicionar o resultado ao histórico
function addToHistory(result) {
  const listItem = document.createElement('li'); // Criar item da lista
  listItem.textContent = `Dado rolado: ${result}`; // Adicionar o texto
  historyList.appendChild(listItem); // Adicionar na lista
}
