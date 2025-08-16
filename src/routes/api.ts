import express from 'express';
import { Request, Response } from 'express';
import sequelize from '../utils/db';
import User from '../models/user.model';
import authController from '../controllers/auth.controller';
import authMiddleware from '../middlewares/auth.middleware';
import farmerController from '../controllers/farmer.controller';
import farmerMiddleware from '../middlewares/farmer.middleware';

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.get('/farmer', authMiddleware, farmerMiddleware, farmerController.dashboard);
router.get('/farmer/list-plants', authMiddleware, farmerMiddleware, farmerController.listPlants);
router.get('/farmer/plants/my-plants', authMiddleware, farmerMiddleware, farmerController.listFarmerPlants);
router.post('/farmer/plants/create', authMiddleware, farmerMiddleware, farmerController.createFarmerPlants);

export default router;