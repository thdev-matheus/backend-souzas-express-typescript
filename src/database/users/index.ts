import { IUser } from "../../types/user.types";
import { v4 as uuid } from "uuid";

export const users: IUser[] = [
  {
    id: uuid(),
    image: "https://avatars.githubusercontent.com/u/109465340?v=4",
    username: "Theus",
    name: "Matheus Vieira",
    password: "Matheus!123",
  },
];
