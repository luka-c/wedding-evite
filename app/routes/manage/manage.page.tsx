import { FC } from "hono/jsx";
import { Layout } from "../../core/components/layout.tsx";
import { Header } from "../../core/components/header.tsx";
import { Content } from "../../core/components/content.tsx";
import { GuestList } from "./components/guest_list.tsx";
import { guestService } from "./services/guest.service.ts";
import { btnPrimary } from "./styles/guest-styles.tsx";
import { css, cx } from "hono/css";

export const Manage: FC = async (_) => {
  const guests = await guestService.getAll();

  return (
    <Layout title="Upravljanje pozivnicama">
      <Header />
      <Content>
        <h1 class={cx(headerStyles, "text-3xl")}>Pozvani ljudi</h1>

        <form method="post" action="/manage/guests/add" class={formStyles}>
          <input type="text" name="names" placeholder="Ime(na) gosta" required />

          <input
            type="number"
            name="attending"
            placeholder="Broj gostiju"
            min="0"
            inputmode="numeric"
            required
          />

          <button type="submit" class={btnPrimary}>
            Dodaj gosta
          </button>
        </form>

        <GuestList guests={guests} />
      </Content>
    </Layout>
  );
};

const headerStyles = css`
  margin-bottom: var(--margin-xl);

  @media screen and (width > 1024px) {
    margin-bottom: var(--margin-4xl);
  }
`;

const formStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-sm);
  margin-block: 2rem;

  button {
    margin-left: var(--margin-md);
    font-size: 1rem;
  }

  @media screen and (width < 600px) {
    input,
    button {
      flex: 1;
    }

    button {
      margin-top: var(--margin-md);
      margin-left: 0;
    }
  }
`;
