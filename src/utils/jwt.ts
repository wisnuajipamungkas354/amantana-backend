import jwt from 'jsonwebtoken';
import 'dotenv/config';

export interface IUserToken {
  id: number;
  email: string;
  role: string;
}

export const generateToken = (user: IUserToken) => {
  const token = jwt.sign(user, process.env.JWT_TOKEN as string, {
    expiresIn: '1h',
  });

  return token;
};
export const getUserData = (token: string) => {
  const user = jwt.verify(token, process.env.JWT_TOKEN as string) as IUserToken;
  return user;
};