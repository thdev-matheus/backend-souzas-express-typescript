import { v4 as uuid } from "uuid";
import { IUserBase, IUserInfo } from "../types/user.types";

export class User {
  id: string = uuid();
  name: string;
  image: string;
  username: string;
  password: string;

  constructor({ image, name, password, username }: IUserBase) {
    this.image = image;
    this.username = username;
    this.name = name;
    this.password = password;
  }

  info(): IUserInfo {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      username: this.username,
    };
  }
}
