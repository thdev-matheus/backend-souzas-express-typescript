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
    console.log(`${user.username} saiu`);

    const goodBye = new Message({
      content: [`${user.username} saiu`],
      type: "system",
      info: getDateHour(),
    });

    const indexConnectedUsers = connectedUsers.findIndex(
      (usr) => usr.id === user.id
    );
    connectedUsers.splice(indexConnectedUsers, 1);

    console.log(connectedUsers);

    io.emit("chat", goodBye.messageObj());
    io.emit("users", connectedUsers);
  });
};
