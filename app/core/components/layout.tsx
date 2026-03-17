import type { FC } from "hono/jsx";
import { html } from "hono/html";
import { Head } from "./head.tsx";
import { tLayoutProps } from "../props/layout.props.tsx";
import { ToastManager } from "./toast_container.tsx";

export const Layout: FC<tLayoutProps> = (props) => {
  return (
    <>
      {html`<!DOCTYPE html>`}
      <html>
        <Head title={props.title} />
        <body>{props.children}</body>
        <ToastManager />
      </html>
    </>
  );
};
