import { Request, Response } from "express";
import FuelStationService from "../services/fuelStationService";

class FuelStationController {
  static async getAllStations(req: Request, res: Response) {
    try {
      const stations = await FuelStationService.findAllFuelStations();

      if (stations) {
        return res.status(200).json(stations);
      }

      return res.status(404).json({ message: "No stations available" });
    } catch (e: unknown) {
      return res.status(500).json({ error: e });
    }
  }

  static async createStation(req: Request, res: Response) {
    try {
      const { name, city, address, longitude, latitude, pumps, id } = req.body;
      const station = await FuelStationService.createFuelStation(
        name,
        city,
        address,
        latitude,
        longitude,
        pumps,
        id
      );
      res.status(201).json(station);
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
