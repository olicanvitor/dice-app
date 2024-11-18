// script.js

// Função para gerar um número aleatório entre 1 e 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Selecionar o botão e o elemento para mostrar o resultado
const rollButton = document.getElementById('rollDice');
const resultDisplay = document.getElementById('result');

// Adicionar evento de clique ao botão
rollButton.addEventListener('click', () => {
  const result = rollDice();
  resultDisplay.textContent = result; // Mostrar o número do dado
});
