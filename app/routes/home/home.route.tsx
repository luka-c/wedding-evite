import { Hono } from "hono";
import { Home } from "./home.component.tsx";
import { guestService } from "../manage/services/guest.service.ts";

const app = new Hono();

app.get("/", async (c) => {
  const id = c.req.query("id");
  const success = c.req.query("success") === "true";

  let guest = null;

  if (id) {
    guest = await guestService.get(id);
  }

  return c.html(<Home guest={guest} success={success} />);
});

app.post("/rsvp", async (c) => {
  const body = await c.req.parseBody();
  const id = body.id as string;
  const attending = parseInt(body.attending as string, 10);

  if (id && !isNaN(attending)) {
    const guest = await guestService.get(id);

    if (guest) {
      await guestService.update(id, guest.names, attending);
      return c.redirect(`/?id=${id}&success=true`);
    }
  }

  return c.redirect("/");
});

export default app;
