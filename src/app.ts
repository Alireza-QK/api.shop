import fastify from "fastify";
import cors from "@fastify/cors";
import { connectDB } from "./config/db";
import { Routes } from "./routes";

export async function buildApp() {
  const app = fastify({ logger: true });
  await connectDB();
  await app.register(cors, {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  // Define routes here
  app.register(Routes)
  
  app.get("/ok", (req, res) => {
    res.send({ message: "Success" });
  });

  return app;
}
