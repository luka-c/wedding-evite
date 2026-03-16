import { FC } from "hono/jsx";
import { HeaderLink } from "./header_link.tsx";
import { css } from "hono/css";

export const Header: FC = () => {
  return (
    <nav class={navClass}>
      <HeaderLink link="/" title="Naslovnica" />
      <HeaderLink link="/manage" title="Upravljanje Pozivnicama" />
    </nav>
  );
};

const navClass = css`
  background: var(--background);
  border-bottom: 1px solid var(--border);
  padding: var(--padding-lg) var(--padding-xl);
  display: flex;
  justify-content: center;
  gap: var(--gap-xl);
`;
