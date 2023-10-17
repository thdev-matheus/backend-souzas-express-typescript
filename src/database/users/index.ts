import { User } from "../../models/user.model";

export const users: User[] = [
  new User({
    name: "Matheus Vieira",
    image: "https://avatars.githubusercontent.com/u/109465340?v=4",
    password: "Matheus!123",
    username: "Theus",
  }),
  new User({
    name: "Jessica Vieira",
    image: "https://i.ibb.co/kmvGcG4/jess.jpg",
    password: "Jess!123",
    username: "Jess",
  }),
];
