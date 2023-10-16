import { app, server, socketIo } from "./app";
import "dotenv/config";

const init = async () => {
  const APP_PORT = process.env.APP_PORT || 8081;
  const SOCKET_PORT = process.env.SOCKET_PORT || 8082;

  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta: ${APP_PORT}`);
  });
  server.listen(SOCKET_PORT, () => {
    console.log(`Socket  iniciado na porta: ${SOCKET_PORT}`);
  });

  socketIo.on("connection", async (socket) => {
    console.log(`usuário ${socket.id} contectado!`);
    console.log(
      `Agora somos ${socketIo.sockets.sockets.size} guerreiro${
        socketIo.sockets.sockets.size > 1 ? "s" : ""
      }.`
    ); //quantidade de sockets conectados

    socket.on("disconnect", () => {
      console.log(`usuário ${socket.id} foi de arrasta pra cima!`);
      console.log(
        `Agora somos ${socketIo.sockets.sockets.size} guerreiro${
          socketIo.sockets.sockets.size > 1 ? "s" : ""
        }.`
      ); //quantidade de sockets conectados
    });

    socket.on("chat", (message) => {
      console.log(message);
      socket.broadcast.emit("chat", message); // envia para todos, menos para o emissor.
      // socketIo.emit("message", message); // envia para todos, inclusive para o emissor
    });
  });
};

init();
