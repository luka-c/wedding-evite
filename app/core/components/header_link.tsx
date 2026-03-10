import { FC } from "hono/jsx";
import { tHeaderLinkProps } from "../props/header_link.props.tsx";
import { css, cx } from "hono/css";

export const HeaderLink: FC<tHeaderLinkProps> = (props) => {
  return (
    <a class={cx(linkClass, "text-xl")} href={props.link}>
      {props.title}
    </a>
  );
};

const linkClass = css`
  color: var(--foreground);
  text-decoration: none;
  padding: var(--padding-sm) var(--padding-lg);
  background-clip: padding-box;
  border-width: 1px;
  border-color: #0000;
  border-radius: var(--radius-4xl);

  transition:
    color var(--transition-duration) var(--timing-function),
    background-color var(--transition-duration) var(--timing-function);

  &:hover {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }
`;
