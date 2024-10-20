import { Sequelize } from "sequelize";
import mysql2 from "mysql2";  // Use the standard mysql2 module, not the promise-based version

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: 3306,
    dialectModule: mysql2,  // Still pass mysql2 here
  }
);

async function checkDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

checkDatabaseConnection();

export default sequelize;
