import express from "express";
import morgan from "morgan";
import authMiddleware from "./middlewares/authMiddleware";
import setupAssociations from "./models/associations";
import fuelStationRoute from "./routes/fuelStationRoute";

const app = express();
setupAssociations();

app.use(morgan("tiny"));
app.use(express.static("dist"));

app.use("/stations", [authMiddleware, express.json()], fuelStationRoute);

export default app;
