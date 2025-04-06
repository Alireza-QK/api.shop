import { DataSource } from "typeorm";
import { config } from "dotenv";
import path, { resolve } from "path";
import { User } from "src/modules/user/user.entity";

config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "beauty_store",
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, "..", "modules", "**" ,"*.entity.ts")],
});

export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    
    console.log("🗄️ Database connected successfully");
  } catch (err) {
    console.error("❌ Error connecting to DB:", err);
    process.exit(1);
  }
};
