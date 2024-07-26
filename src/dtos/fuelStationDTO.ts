import FuelPump from "../models/fuelPump";
import FuelStation from "../models/fuelStation";

export class FuelStationDTO {
  id: number;
  name: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
  pumps?: FuelPumpDTO[];

  constructor(fuelStation: FuelStation) {
    this.id = fuelStation.id;
    this.name = fuelStation.name;
    this.address = fuelStation.address;
    this.city = fuelStation.city;
    this.latitude = fuelStation.latitude;
    this.longitude = fuelStation.longitude;
    this.pumps = fuelStation.pumps
      ? fuelStation.pumps.map((pump) => new FuelPumpDTO(pump))
      : [];
  }
}

export class FuelPumpDTO {
  id: number;
  fuelType: string;
  price: number;
  available: boolean;

  constructor(fuelPump: FuelPump) {
    this.id = fuelPump.id;
    this.fuelType = fuelPump.fuelType;
    this.price = fuelPump.price;
    this.available = fuelPump.available;
  }
}
