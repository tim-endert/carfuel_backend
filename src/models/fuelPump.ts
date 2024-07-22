import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import FuelStation from "./fuelStation";

class FuelPump extends Model {
  declare id: number;
  declare fuelType: string;
  declare price: number;
  declare available: boolean;
}

FuelPump.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fuelType: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "fuel_type",
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    stationId: {
      type: DataTypes.STRING,
      references: {
        model: FuelStation,
        key: "id",
      },
    },
  },
  { sequelize, modelName: "fuelPump" }
);

export default FuelPump;
