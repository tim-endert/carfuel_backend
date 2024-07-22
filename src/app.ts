import express from "express";
import { connectDb, sequelize } from "./config/database";
import setupAssociations from "./models/associations";
import fuelStationRoute from "./routes/fuelStationRoute";

const app = express();

app.use(express.json());

app.use("/stations", fuelStationRoute);

connectDb();
sequelize.sync();
setupAssociations();

export default app;
