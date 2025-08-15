import { Request, Response } from "express"
import Validator from 'validatorjs';
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { generateToken, IUserToken } from "../utils/jwt";
import { IReqUser } from "../middlewares/auth.middleware";

type TRegister = {
  fullName: string;
  email: string;
  role: string;
  password: string;
  confirmedPassword: string;
};

type TLogin = {
  email: string;
  password: string;
}

export default {
  async register(req: Request, res: Response) {
    /**
     #swagger.requestBody = {
      required: true,
      schema: {$ref: "#/components/schemas/RegisterRequest"}
     } 
     
     */
    const { fullName, email, role, password, confirmedPassword } = req.body as unknown as TRegister;

    try {
      const validatedData = new Validator({
        fullName, email, role, password, confirmedPassword
      }, {
        fullName: 'required|min:3',
        email: 'required|email',
        role: 'required',
        password: 'required|min:8',
        confirmedPassword: 'required|same:password',
      });

      const hashedPassword = bcrypt.hashSync(password, 10);

      if(validatedData.passes()) {
        await User.create({
          fullName: fullName, 
          email: email, 
          password: hashedPassword,
          role: role
        })

        res.status(200).json({
          message: 'Registration success!',
          data: {
            fullName, email, role
          }
        });
      } else {
        res.status(400).json({
          message: "Validation fails!",
          error: validatedData.errors.errors
        })
      }

    } catch(error) {
      const err = error as unknown as Error;
      res.status(400).json({
        message: err.message,
        data: null,
      });
    }
  },
  async login(req: Request, res: Response) {
    /**
     #swagger.requestBody = {
      required: true,
      schema: {$ref: "#/components/schemas/LoginRequest"}
     } 
     
     */
    try {
      const { email, password } = req.body as unknown as TLogin;

      const validatedData = new Validator({
        email, password
      }, {
        email: 'required|email',
        password: 'required|min:8',
      });

      if(validatedData.passes()) {
        const user = await User.findOne({ where: { email: email } });

        if(user !== null) {
          const isPasswordTrue = bcrypt.compareSync(password, user?.getDataValue('password'));

          if(isPasswordTrue) {
            const payload: IUserToken = {
              id: user?.getDataValue('id'),
              email: user?.getDataValue('email'),
              role: user?.getDataValue('role'),
            }

            const token = generateToken(payload);
            res.json({ 
              message: 'Login success!',
              token
            });
          }
        } else {
          throw new Error('Email or password is wrong!');
        }
      } else {
        res.status(400).json({
          message: "Validation fails!",
          error: validatedData.errors.errors
        });
      }

      // cocokin password
    } catch(error) {
      const err = error as unknown as Error;
      res.status(400).json({
        message: err.message,
        data: null,
      });
    }
  },
  cobain(req: IReqUser, res: Response) {
    /**
     #swagger.security = [{
      bearerAuth: []
     }] 
     */
    try {
      const user = req.user;
      const result = User.findOne({ where: { id: user?.id } });

      res.status(200).json({
        message: 'Success, User found!!!',
        data: result
      })
    } catch(err) {
      const error = err as unknown as Error;
      res.status(400).json({
        message: error.message,
        data: null,
      });
    }
  }
}