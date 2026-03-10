import { Hono } from "@hono/hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello, World!");
});

Deno.serve({ port: 2137, hostname: "0.0.0.0" }, app.fetch);
