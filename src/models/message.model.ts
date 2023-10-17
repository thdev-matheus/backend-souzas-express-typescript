import { IMessageBase } from "../types/message.types";
import { IUserInfo } from "../types/user.types";
import { v4 as uuid } from "uuid";

export class Message {
  id: string = uuid();
  user?: IUserInfo;
  type: "text" | "system";
  content: string[];
  info: {
    date: string;
    hour: string;
  };

  constructor({ user, type, info, content }: IMessageBase) {
    this.content = content;
    this.info = info;
    this.type = type;
    this.user = user;
  }

  messageObj() {
    return {
      id: this.id,
      user: this.user,
      type: this.type,
      content: this.content,
      info: this.info,
    };
  }
}
