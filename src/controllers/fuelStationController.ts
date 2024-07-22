import { Request, Response } from "express";
import FuelStationService from "../services/fuelStationService";

class FuelStationController {
  static async getAllStations(req: Request, res: Response) {
    try {
      const stations = await FuelStationService.findAllFuelStations();

      if (stations) {
        res.status(200).json(stations);
      } else {
        res.status(404).json({ message: "No stations available" });
      }
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  static async createStation(req: Request, res: Response) {
    try {
      const { id, name, city, address, longitude, latitude, pumps } = req.body;
      const station = await FuelStationService.createFuelStation(
        name,
        city,
        address,
        latitude,
        longitude,
        id,
        pumps
      );
      res.status(200).json(station);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  static async removeStation(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await FuelStationService.destroyFuelStation(id);
      res.status(200).json("Station removed");
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  static async updateStation(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await FuelStationService.updateFuelStation(id, req.body);
      res.status(200).json("Updated Fuel Station");
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}

export default FuelStationController;
