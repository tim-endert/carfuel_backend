import app from "./app";
import { connectDb, sequelize } from "./config/database";

const PORT = process.env.PORT || 3000;

connectDb().then(() => {
  sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
  });
});
