import type { FC } from "hono/jsx";
import { tHeadProps } from "../props/head.props.tsx";
import { Style } from "hono/css";

export const Head: FC<tHeadProps> = (props) => {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <Style />

      <link rel="stylesheet" href="static/reset.css" />
      <link rel="stylesheet" href="static/fonts.css" />
      <link rel="stylesheet" href="static/colors.css" />
      <link rel="stylesheet" href="static/variables.css" />
      <link rel="stylesheet" href="static/inputs.css" />
      <title>{props.title}</title>
    </head>
  );
};
