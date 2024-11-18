const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let rollHistory = []; // Histórico global de rolagens

// Rota para servir o frontend
app.use(express.static('public'));

// WebSocket - Conexões
io.on('connection', (socket) => {
  console.log('Um usuário se conectou!');

  // Enviar histórico atual para o cliente conectado
  socket.emit('updateHistory', rollHistory);

  // Ouvir rolagens enviadas pelo cliente
  socket.on('newRoll', (roll) => {
    rollHistory.push(roll); // Adicionar ao histórico global
    if (rollHistory.length > 50) rollHistory.shift(); // Limitar a 50 entradas

    // Enviar atualização para todos os clientes
    io.emit('updateHistory', rollHistory);
  });

  // Cliente desconectado
  socket.on('disconnect', () => {
    console.log('Um usuário se desconectou!');
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
