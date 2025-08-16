import { DataTypes } from "sequelize";
import sequelize from "../utils/db";

const PlantTreatment = sequelize.define('plant_treatment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  treatmentStartDate: {
    type: DataTypes.DATEONLY
  },
  treatmentLastDate: {
    type: DataTypes.DATEONLY
  },
  fertilizerType: {
    type: DataTypes.STRING
  },
  notes: {
    type: DataTypes.STRING
  }
});

export default PlantTreatment;