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
  new User({
    name: "Cláudio Souza",
    image: "https://i.ibb.co/W0jLRGj/Cl-udio-Souza.png",
    password: "Claudio!123",
    username: "NuncaDuvidedeCristo",
  }),
  new User({
    name: "Diego Martins",
    image: "https://i.ibb.co/3ztJmC8/Diego-Martins.png",
    password: "Diego!123",
    username: "GoDiegoGo",
  }),
  new User({
    name: "Mônica Souza",
    image: "https://i.ibb.co/wh1rR5D/Monica-Souza.png",
    password: "Monica!123",
    username: "Manica",
  }),
  new User({
    name: "Pedro Henrique",
    image: "https://i.ibb.co/v1zn9DY/Pedro-Henrique.png",
    password: "Pedro!123",
    username: "Pedin",
  }),
];
