// Função para gerar um número aleatório entre 1 e 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Certifique-se de que o código só execute após o carregamento da página
window.addEventListener('DOMContentLoaded', () => {
  // Selecionar elementos
  const rollButton = document.getElementById('rollDice'); // Botão de rolar dado
  const resultDisplay = document.getElementById('result'); // Exibição do resultado
  const historyList = document.getElementById('historyList'); // Lista de histórico

  // Adicionar evento de clique ao botão
  rollButton.addEventListener('click', () => {
    const result = rollDice(); // Rolar o dado
    resultDisplay.textContent = result; // Mostrar o resultado
    addToHistory(result); // Atualizar o histórico
  });

  // Função para adicionar o resultado ao histórico
  function addToHistory(result) {
    const listItem = document.createElement('li'); // Criar um item da lista
    listItem.textContent = `Você rolou: ${result}`; // Definir o texto do item
    historyList.appendChild(listItem); // Adicionar o item na lista

    // Fazer a lista rolar para o final automaticamente
    historyList.scrollTop = historyList.scrollHeight;
  }
});
