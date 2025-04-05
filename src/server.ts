import { buildApp } from "./app";

const start = async () => {
  const app = await buildApp();
  const port = process.env.PORT || 3000;
  try {
    await app.listen({ port: +port, host: "0.0.0.0" });
    console.log(`🚀 Server running on http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
