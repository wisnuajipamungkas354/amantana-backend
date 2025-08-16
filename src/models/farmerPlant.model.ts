import { DataTypes } from "sequelize";
import sequelize from "../utils/db";

const FarmerPlant = sequelize.define('farmer_plant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  plantingDate: {
    type: DataTypes.DATEONLY,
  },
});

export default FarmerPlant;