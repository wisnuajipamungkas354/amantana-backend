import { NextFunction, Request, Response } from "express";
import { IReqUser } from "./auth.middleware";

export default (req: IReqUser, res: Response, next: NextFunction) => {
  if(!(req.user?.role === 'agronomist')) {
    res.status(403).json({
      message: 'unauthorized',
      data: null,
    });
  }

  next();
};