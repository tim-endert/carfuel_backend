import FuelPump from "./fuelPump";
import FuelStation from "./fuelStation";

const setupAssociations = () => {
  FuelStation.hasMany(FuelPump, { as: "pumps", foreignKey: "stationId" });
  FuelPump.belongsTo(FuelStation, { foreignKey: "stationId" });
};

export default setupAssociations;
