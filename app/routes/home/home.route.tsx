import { Hono } from "hono";
import { Home } from "./home.component.tsx";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<Home />);
});

export default app;
