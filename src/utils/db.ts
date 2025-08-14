import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: process.env.DB_DIALECT as any,
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    dialectOptions: {
      requestTimeOut: 30000,
      encrypt: true
    } 
  }
)

export default sequelize;