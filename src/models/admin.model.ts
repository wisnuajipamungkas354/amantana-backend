import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../utils/db";
import User from "./user.model";

const Admin = sequelize.define("admin", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomorTelepon: {
    type: DataTypes.STRING,
  },
  alamat: {
    type: DataTypes.STRING,
  },
});

export default Admin;