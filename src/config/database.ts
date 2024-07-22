import { Sequelize } from "sequelize";

const sequelizeInstance = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const connectDb = async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connectDb, sequelizeInstance as sequelize };
