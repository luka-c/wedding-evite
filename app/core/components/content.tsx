import { FC } from "hono/jsx";
import { css } from "hono/css";
import { tContentProps } from "../props/content_props.tsx";

export const Content: FC<tContentProps> = (props) => {
  return <div class={wrapperClass}>{props.children}</div>;
};

const wrapperClass = css`
  max-width: 1200px;
  margin-inline: auto;
  padding: 5rem 2.5rem;
`;
