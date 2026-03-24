import { Hono } from "hono";
import { Home } from "./home.component.tsx";
import { guestService } from "../manage/services/guest.service.ts";

const app = new Hono();

app.get("/", async (c) => {
  const id = c.req.query("id");

  let guest = null;

  if (id) {
    guest = await guestService.get(id);
  }

  return c.html(<Home guest={guest} />);
});

app.post("/rsvp", async (c) => {
  const body = await c.req.parseBody();
  const id = body.id as string;
  const attending = parseInt(body.attending as string, 10);

  if (id && !isNaN(attending)) {
    const success = await guestService.confirm(id, attending);

    if (success) {
      return c.redirect(`/?id=${id}&success=true`);
    }
  }

  return c.redirect(id ? `/?id=${id}` : "/");
});

export default app;
