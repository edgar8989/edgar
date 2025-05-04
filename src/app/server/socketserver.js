// server/socketServer.ts
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Socket.io server running');
});

const io = new SocketIOServer(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
