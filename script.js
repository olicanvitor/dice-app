// Função para gerar um número aleatório entre 1 e 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Selecionar elementos
const rollButton = document.getElementById('rollDice');
const resultDisplay = document.getElementById('result');
const historyList = document.getElementById('historyList');

// Adicionar evento de clique ao botão
rollButton.addEventListener('click', () => {
  const result = rollDice(); // Rolar o dado
  resultDisplay.textContent = result; // Mostrar o resultado
  addToHistory(result); // Atualizar o histórico
});

// Função para adicionar o resultado ao histórico
function addToHistory(result) {
  const listItem = document.createElement('li'); // Criar um item de lista
  listItem.textContent = `Você rolou: ${result}`; // Adicionar texto
  historyList.appendChild(listItem); // Inserir na lista

  // Rolar automaticamente o histórico para o item mais recente
  historyList.scrollTop = historyList.scrollHeight;
}
