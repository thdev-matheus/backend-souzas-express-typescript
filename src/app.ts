import express, { Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { appRoutes } from "./routes";
import { handleErrorMiddleware } from "./errors";
import { createServer } from "http";
import { Server as Io } from "socket.io";

export const app = express();
export const server = createServer(app);
export const io = new Io(server, { cors: { origin: "*" } });

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message:
      "Bem-vindo(a) Souza's, O chat secreto da família. Esta aplicação foi criada por Matheus Henrique Vieira Cardoso.",
  });
});

appRoutes(app);

app.use(handleErrorMiddleware);
