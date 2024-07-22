import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

class FuelStation extends Model {
  declare id: string;
  declare name: string;
  declare address: string;
  declare city: string;
  declare latitude: number;
  declare longitude: number;
}

FuelStation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  { sequelize, modelName: "fuelStation" }
);

export default FuelStation;
