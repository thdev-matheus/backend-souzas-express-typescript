import { Server as Io } from "socket.io";
import { IUserInfo } from "../types/user.types";
import { users } from "../database/users";
import { Message } from "../models/message.model";
import { getDateHour } from "../utils";
import { socketChatEvent } from "./events/chat";
import { socketDisconnetcEvent } from "./events/disconnect";
import { socketConnectEvent } from "./events/connect";

export const socketConnection = (io: Io) => {
  io.on("connection", async (socket) => {
    const user = socketConnectEvent(socket, io);

    if (socket.connected && user) {
      socketDisconnetcEvent(socket, io, user);
      socketChatEvent(socket, io);
    }
  });
};
