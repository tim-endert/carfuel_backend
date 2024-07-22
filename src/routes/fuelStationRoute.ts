import express from "express";
import FuelStationController from "../controllers/fuelStationController";

const fuelStationRoute = express.Router();

fuelStationRoute.get("/", FuelStationController.getAllStations);
fuelStationRoute.post("/", FuelStationController.createStation);
fuelStationRoute.delete("/:id", FuelStationController.removeStation);
fuelStationRoute.put("/:id", FuelStationController.updateStation);

export default fuelStationRoute;
