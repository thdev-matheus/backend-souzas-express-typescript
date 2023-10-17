import { Socket } from "socket.io";
import { connectedUsers } from "../../database/connectedUsers";

export const socketLoggedUsersEvent = (socket: Socket) => {
  socket.on("users", (_) => {
    const response = {
      count: connectedUsers.length,
      sockets: connectedUsers,
    };

    socket.emit("users", response);
  });
};
