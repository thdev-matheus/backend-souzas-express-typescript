import { Server, Socket } from "socket.io";

export const socketChatEvent = (socket: Socket, io: Server) => {
    socket.on("chat", (message) => {
      io.emit("chat", message);
    });
}