import { Express } from "express";
import { sessionRoutes } from "./session";

export const appRoutes = (app: Express) => {
  app.use("/session", sessionRoutes());
};
