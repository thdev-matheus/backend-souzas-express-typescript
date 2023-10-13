import { IUserLoginResponse, IUserLoginRequest } from "../../types/user.types";
import { AppError } from "../../errors";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { users } from "../../database/users";

export const loginService = ({
  username,
  password,
}: IUserLoginRequest): IUserLoginResponse => {
  if (!username || !password) {
    throw new AppError(400, "nome de usuário e senha são obrigatórios");
  }

  const user = users.find((usr) => usr.username === username);

  if (!user) {
    throw new AppError(401, "credenciais inválidas");
  }

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) {
    throw new AppError(401, "credenciais inválidas");
  }

  const token = jwt.sign(
    {
      userId: user.id,
      userUsername: user.username,
    },
    process.env.SECRET_KEY!,
    { expiresIn: "24h" }
  );

  return { token, user: user.info() };
};
