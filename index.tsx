import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "hono/deno";
import home from "./app/routes/home/home.route.tsx";
import manage from "./app/routes/manage/manage.route.tsx";

const app = new Hono();

// STATIC FILES
app.use("/static/*", serveStatic({ root: "./" }));
app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));

// CORS
app.use(cors());

app.route("/", home);
app.route("/manage", manage);

Deno.serve(app.fetch);
