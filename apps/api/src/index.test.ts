
import { describe, it, expect } from "vitest";
import { createApp } from "./index.js";

describe("GET /health", () => {
  it("returns 200 and { status: 'ok' }", async () => {
    const app = createApp();

    try {
      const res = await app.inject({
        method: "GET",
        url: "/health",
      });

      expect(res.statusCode).toBe(200);
      expect(JSON.parse(res.body)).toEqual({ status: "ok" });
    } finally {
      await app.close();
    }
  });
});
