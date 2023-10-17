import { server, io } from "./app";
import "dotenv/config";
import { users } from "./database/users";
import { IUserInfo } from "./types/user.types";
import { Message } from "./models/message.model";
import { getDateHour } from "./utils";
import { socketConnection } from "./Socket/socket.connection";

const init = async () => {
  const SOCKET_PORT = process.env.SOCKET_PORT || 8081;

  server.listen(SOCKET_PORT, () => {
    console.log(`Socket  iniciado na porta: ${SOCKET_PORT}`);
  });

  socketConnection(io);
};

init();
