import { app, server, io } from "./app";
import "dotenv/config";
import { users } from "./database/users";
import { IUserInfo } from "./types/user.types";
import { Message } from "./models/message.model";
import { getDateHour } from "./utils";

const init = async () => {
  const APP_PORT = process.env.APP_PORT || 8081;
  const SOCKET_PORT = process.env.SOCKET_PORT || 8082;

  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta: ${APP_PORT}`);
  });
  server.listen(SOCKET_PORT, () => {
    console.log(`Socket  iniciado na porta: ${SOCKET_PORT}`);
  });

  io.on("connection", async (socket) => {
    console.log("conectou");

    const userData: IUserInfo = socket.handshake.query as unknown as IUserInfo;
    const user = users.find((u) => u.username === userData.username);

    if (!user) {
      socket.disconnect();
      return;
    }

    const message = new Message({
      content: [
        `${user.username} acaba de entrar!`,
        `Agora tem ${io.sockets.sockets.size} guerreiro${
          io.sockets.sockets.size > 1 ? "s" : ""
        } na sala.`,
      ],
      type: "system",
      info: getDateHour(),
    });

    setTimeout(() => {
      io.emit("chat", message.messageObj());
    }, 1000);

    socket.on("disconnect", () => {
      console.log(
        `usuário ${userData.username} foi desconectado por ser desconhecido!`
      );

      const goodBye = new Message({
        content: [
          `${user.username} foi de arrasta pra cima!`,
          `Agora tem ${io.sockets.sockets.size} guerreiro${
            io.sockets.sockets.size > 1 ? "s" : ""
          } na sala.`,
        ],
        type: "system",
        info: getDateHour(),
      });

      io.emit("chat", goodBye.messageObj());
    });

    socket.on("chat", (message) => {
      // console.log(message);
      // socket.broadcast.emit("chat", message); // envia para todos, menos para o emissor.
      io.emit("chat", message); // envia para todos, inclusive para o emissor
    });
  });
};

init();
