import { Hono } from "hono";
import { Manage } from "./manage.page.tsx";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<Manage />);
});

export default app;
