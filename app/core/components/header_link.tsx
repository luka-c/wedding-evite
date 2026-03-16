import { FC } from "hono/jsx";
import { tHeaderLinkProps } from "../props/header_link.props.tsx";
import { css } from "hono/css";

export const HeaderLink: FC<tHeaderLinkProps> = (props) => {
  return (
    <a class={linkClass} href={props.link}>
      {props.title}
    </a>
  );
};

const linkClass = css`
  color: var(--foreground);
  text-decoration-color: transparent;
  padding: var(--padding-sm) var(--padding-lg);
  background-clip: padding-box;
  border: none;

  transition: text-decoration-color var(--transition-duration) var(--timing-function);

  &:hover {
    text-decoration-color: var(--primary);
  }
`;
