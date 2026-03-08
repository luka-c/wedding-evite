import type { FC } from "hono/jsx";
import { Head } from "./head.tsx";
import { tLayoutProps } from "../props/layout.props.tsx";

export const Layout: FC<tLayoutProps> = (props) => {
  return (
    <html>
      <Head title={props.title} />
      <body>{props.children}</body>
    </html>
  );
};
