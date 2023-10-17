import { IUserInfo } from "./user.types";

export interface IMessageBase {
  user?: IUserInfo;
  type: "text" | "system";
  content: string[];
  info: {
    date: string;
    hour: string;
  };
}
