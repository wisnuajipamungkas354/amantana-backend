import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../utils/db";

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    get() {
      return this.getDataValue('id');
    },
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('fullName');
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    get() {
      return this.getDataValue('email');
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('password');
    },
  },
  role: {
    type: DataTypes.ENUM('admin', 'farmer', 'agronomist'),
    allowNull: false,
    get() {
      return this.getDataValue('role');
    },
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;