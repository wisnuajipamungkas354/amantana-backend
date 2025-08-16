import { DataTypes } from "sequelize";
import sequelize from "../utils/db";
import User from "./user.model";

const Farmer = sequelize.define("farmer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomorTelepon: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  alamat: {
    type: DataTypes.STRING,
  },
  ukuranLahan: {
    type: DataTypes.STRING,
  },
  tipeLahan: {
    type: DataTypes.STRING,
  },
  tglJoin: {
    type: DataTypes.DATE,
  }
});

export default Farmer;