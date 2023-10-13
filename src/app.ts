import express, { Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { appRoutes } from "./routes";
import { handleErrorMiddleware } from "./errors";

export const app = express();
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
