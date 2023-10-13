export interface IUser {
  id: string;
  image: string;
  username: string;
  name: string;
  password: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}
