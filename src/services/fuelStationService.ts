import { FuelStationDTO } from "../dtos/fuelStationDTO";
import FuelPump from "../models/fuelPump";
import FuelStation from "../models/fuelStation";

class FuelStationService {
  static async findAllFuelStations() {
    const fuelStations = await FuelStation.findAll({
      include: {
        model: FuelPump,
        as: "pumps",
      },
    });

    return fuelStations.map((station) => new FuelStationDTO(station));
  }

  static async createFuelStation(
    name: string,
    city: string,
    address: string,
    latitude: number,
    longitude: number,
    id: string,
    pumps?: FuelPump[]
  ) {
    const createdFuelStation = await FuelStation.create({
      name,
      city,
      address,
      latitude,
      longitude,
      id,
    });

    if (pumps) {
      pumps.map(
        async (pump) =>
          await FuelPump.create({ ...pump, stationId: createdFuelStation.id })
      );
    }

    return createdFuelStation;
  }

  static async destroyFuelStation(id: string) {
    const station = await FuelStation.findByPk(id);

    if (station) {
      return await station.destroy();
    }

    throw new Error(`FuelStation with id ${id} not found`);
  }

  static async updateFuelStation(id: string, params: FuelStation) {
    const [updatedRowsCount] = await FuelStation.update(params, {
      where: { id },
    });

    if (updatedRowsCount > 0) {
      return updatedRowsCount;
    }

    throw new Error(`FuelStation could not be updated`);
  }
}

export default FuelStationService;
