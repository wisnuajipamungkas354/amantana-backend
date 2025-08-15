import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../utils/db";

const Plant = sequelize.define('Plant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  spesies: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lokasi: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Plant.associations({ 'user_id' });