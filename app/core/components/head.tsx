import type { FC } from "hono/jsx";
import { tHeadProps } from "../props/head.props.tsx";
import { Style } from "hono/css";

export const Head: FC<tHeadProps> = (props) => {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap"
        rel="stylesheet"
      />

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
