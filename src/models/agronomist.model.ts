import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../utils/db";
import User from "./user.model";

const Agronomist = sequelize.define("agronomist", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomorTelepon: {
    type: DataTypes.STRING,
  },
  spesialisasi: {
    type: DataTypes.STRING,
  },
});

export default Agronomist;