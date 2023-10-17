import { Socket } from "socket.io";
import { connectedUsers } from "../../database/connectedUsers";

export const socketLoggedUsersEvent = (socket: Socket) => {
  socket.on("users", (_) => {
    socket.emit("users", connectedUsers);
  });
};
