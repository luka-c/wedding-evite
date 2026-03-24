import { Hono } from "hono";
import { Manage } from "./manage.page.tsx";
import { guestService } from "./services/guest.service.ts";
import { basicAuth } from "hono/basic-auth";

const app = new Hono();

app.use(
  "*",
  basicAuth({
    verifyUser: (username, password) => {
      const expectedUser = Deno.env.get("ADMIN_USER") || "admin";
      const expectedPass = Deno.env.get("ADMIN_PASS") || "1234";

      return username === expectedUser && password === expectedPass;
    },
  }),
);

app.get("/", (c) => {
  return c.html(<Manage />);
});

app.post("/guests/add", async (c) => {
  const body = await c.req.parseBody();
  const names = body.names as string;

  if (names) {
    await guestService.add(names, 0);
  }

  return c.redirect("/manage");
});

app.post("/guests/:id/edit", async (c) => {
  const id = c.req.param("id");
  const body = await c.req.parseBody();

  const names = body.names as string;
  const attending = parseInt(body.attending as string, 10);
  const confirmed = parseInt(body.confirmed as string, 0);

  if (id && names && !isNaN(attending) && !isNaN(confirmed)) {
    await guestService.update(id, names, attending, confirmed == 1);
  }

  return c.redirect("/manage");
});

app.post("/guests/:id/delete", async (c) => {
  const id = c.req.param("id");

  if (id) {
    await guestService.delete(id);
  }

  return c.redirect("/manage");
});

export default app;
