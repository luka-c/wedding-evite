import { FC } from "hono/jsx";

export const Header: FC = () => {
  return (
    <nav>
      <a href="/">Naslovnica</a>
      <a href="/manage">Upravljanje Pozivnicama</a>
      <a href="/">Login</a>
    </nav>
  );
};
