import { app, server, socketIo } from "./app";
import "dotenv/config";

const init = async () => {
  const APP_PORT = process.env.APP_PORT || 8081;
  const SERVER_PORT = process.env.SERVER_PORT || 8082;

  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta: ${APP_PORT}`);
  });
  server.listen(SERVER_PORT, () => {
    console.log(`Servidor 2  iniciado na porta: ${SERVER_PORT}`);
  });

  socketIo.on("connection", async (socket) => {
    socket.handshake;
    console.log(`usuário ${socket.id} contectado`);
    console.log((await socketIo.fetchSockets()).length); //quantidade de sockets conectados

    socket.on("disconnect", () => {
      console.log(`usuário ${socket.id} desconectado`);
    });

    socket.on("message", (message) => {
      console.log(message);
      socket.broadcast.emit("message", message); // envia para todos, menos para o emissor.
      // socketIo.emit("message", message); // envia para todos, inclusive para o emissor
    });
  });
};

init();
