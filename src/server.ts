import { app } from "./app";
import "dotenv/config";

const init = async () => {
  const SERVER_PORT = process.env.SERVER_PORT || 3001;

  app.listen(SERVER_PORT, () => {
    console.log(`Servidor iniciado na porta: ${SERVER_PORT}`);
  });
};

init();
