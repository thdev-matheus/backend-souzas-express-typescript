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
    const userData: IUserInfo = socket.handshake.query as unknown as IUserInfo;
    const user = users.find((u) => u.username === userData.username);

    if (!user) {
      socket.disconnect();
      console.log(`U estranho foi desconectado`);
      return;
    }

    console.log(`${user.username} acaba de entrar!`);

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
      console.log(`${user.username} foi de arrasta pra cima!`);

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
      console.log(message);

      io.emit("chat", message);
    });
  });
};

init();
