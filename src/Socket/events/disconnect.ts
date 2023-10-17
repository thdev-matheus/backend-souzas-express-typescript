import { Server, Socket } from "socket.io";
import { User } from "../../models/user.model";
import { Message } from "../../models/message.model";
import { getDateHour } from "../../utils";
import { connectedUsers } from "../../database/connectedUsers";

export const socketDisconnetcEvent = (
  socket: Socket,
  io: Server,
  user: User
) => {
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

    const indexConnectedUsers = connectedUsers.indexOf(user);
    connectedUsers.splice(indexConnectedUsers, 1);

    io.emit("chat", goodBye.messageObj());
  });
};
