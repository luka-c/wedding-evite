import { FC } from "hono/jsx";
import { css } from "hono/css";
import { tContentProps } from "../props/content_props.tsx";

export const Content: FC<tContentProps> = (props) => {
  return <div class={wrapperClass}>{props.children}</div>;
};

const wrapperClass = css`
  max-width: 1200px;
  margin-inline: auto;
  padding: var(--margin-2xl) var(--margin-lg) 0;

  @media screen and (width > 1024px) {
    padding: var(--margin-7xl) var(--margin-3xl) 0;
  }
`;
