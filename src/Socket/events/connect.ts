import { Server, Socket } from "socket.io";
import { IUserInfo } from "../../types/user.types";
import { users } from "../../database/users";
import { connectedUsers } from "../../database/connectedUsers";
import { Message } from "../../models/message.model";
import { getDateHour } from "../../utils";

export const socketConnectEvent = (socket: Socket, io: Server) => {
  const userData: IUserInfo = socket.handshake.query as unknown as IUserInfo;
  const user = users.find((u) => u.username === userData.username);

  if (!user) {
    socket.disconnect();
    console.log(`Um estranho foi desconectado`);
    return undefined;
  } else {
    console.log(`${user.username} entrou!`);

    const message = new Message({
      content: [`${user.username} entrou!`],
      type: "system",
      info: getDateHour(),
    });

    if (!connectedUsers.find((usr) => usr.id === user.id)) {
      connectedUsers.push(user.info());
    }

    setTimeout(() => {
      io.emit("chat", message.messageObj());
      io.emit("users", connectedUsers);
    }, 1000);

    return user;
  }
};
