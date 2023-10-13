export interface IUserBase {
  image: string;
  username: string;
  name: string;
  password: string;
}

export interface IUserInfo {
  id: string;
  image: string;
  username: string;
  name: string;
}

export interface IUserLoginRequest {
  username: string;
  password: string;
}

export interface IUserLoginResponse {
  token: string;
  user: IUserInfo;
}
