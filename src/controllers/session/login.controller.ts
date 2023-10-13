import { Request, Response } from "express";
import { IUserLoginRequest, IUserLoginResponse } from "../../types/user.types";
import { loginService } from "../../services";

export const loginController = (req: Request, res: Response) => {
  const { username, password }: IUserLoginRequest = req.body;

  const userResponse: IUserLoginResponse = loginService({ username, password });

  return res.status(200).json(userResponse);
};
