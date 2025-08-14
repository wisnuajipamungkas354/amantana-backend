import express from 'express';
import { Request, Response } from 'express';
import sequelize from '../utils/db';
import User from '../models/user.model';
import authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);


export default router;