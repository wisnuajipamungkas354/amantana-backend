import { Response } from "express";
import { IReqUser } from "../middlewares/auth.middleware";
import { User } from "../models";
import Plant from "../models/plant.model";
import FarmerPlant from "../models/farmerPlant.model";


export default {
  dashboard(req: IReqUser, res: Response) {
    /**
     #swagger.security = [{
      bearerAuth: []
     }] 
     */
    try {
      const user = req.user;
      const result = User.findOne({ where: { id: user?.id } });

      res.status(200).json({
        message: 'Success, Welcome to Dashboard Farmer!',
        data: result
      })
    } catch(err) {
      const error = err as unknown as Error;
      res.status(400).json({
        message: error.message,
        data: null,
      });
    }
  },
  async listPlants(req: IReqUser, res: Response) {
    /**
     #swagger.security = [{
      bearerAuth: []
     }] 
     */
     try {
      const plants = await Plant.findAll();

      res.status(200).json({
        message: 'Success getting all plants!',
        data: plants
      })
    } catch(err) {
      const error = err as unknown as Error;
      res.status(400).json({
        message: error.message,
        data: null,
      });
    }
  },
  async listFarmerPlants(req: IReqUser, res: Response) {
    /**
     #swagger.security = [{
      bearerAuth: []
     }] 
     */
     try {
      const farmerPlantLists = await FarmerPlant.findAll({ include: Plant });

      res.status(200).json({
        message: 'Success getting all your plants!',
        data: farmerPlantLists
      })
    } catch(err) {
      const error = err as unknown as Error;
      res.status(400).json({
        message: error.message,
        data: null,
      });
    }
  },
  async createFarmerPlants(req: IReqUser, res: Response) {
    try {
      
      // const [ farmerId, plantId ] = req.body as unknown as IReqBody;
    } catch(err) {
      const error = err as unknown as Error;
      res.status(400).json({
        message: error.message,
        data: null,
      });
    }
  },
  updateFarmerPlants(req: Response, res: Response) {
    try {

    } catch(err) {
      const error = err as unknown as Error;
      res.status(400).json({
        message: error.message,
        data: null,
      });
    }
  },
  deleteFarmerPlants(req: Response, res: Response) {
    try {

    } catch(err) {
      const error = err as unknown as Error;
      res.status(400).json({
        message: error.message,
        data: null,
      });
    }
  },
}