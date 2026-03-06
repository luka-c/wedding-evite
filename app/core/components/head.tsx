import type { FC } from "hono/jsx";
import { tHeadProps } from "../props/head_props.tsx";

export const Head: FC<tHeadProps> = (props) => {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      <title>{props.title}</title>
    </head>
  );
};
