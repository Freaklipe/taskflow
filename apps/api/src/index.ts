import { fileURLToPath } from "node:url";
import fastify from "fastify";

const __filename = fileURLToPath(import.meta.url);

const createApp = () => {
  const app = fastify({ logger: true });

  app.get("/health", async () => ({ status: "ok" }));

  return app;
};

const app = createApp();

export { app, createApp };

if (process.argv[1] === __filename) {
  const PORT = parseInt(process.env.PORT ?? "3000", 10);
  await app.listen({ port: PORT, host: "0.0.0.0" });
}
