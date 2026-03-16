import { FC } from "hono/jsx";
import { Layout } from "../../core/components/layout.tsx";
import { Header } from "../../core/components/header.tsx";
import { Content } from "../../core/components/content.tsx";
import { GuestList } from "./components/guest_list.tsx";
import { guestService } from "./services/guest.service.ts";

export const Manage: FC = async (_) => {
  const guests = await guestService.getAll();

  return (
    <Layout title="Upravljanje pozivnicama">
      <Header />
      <Content>
        <h1 class="text-7xl">Pozvani ljudi</h1>

        <form method="post" action="/manage/guests/add" style="margin-top: 2rem;">
          <input type="text" name="names" placeholder="Ime gosta..." required />
          <button type="submit">Dodaj gosta</button>
        </form>

        <GuestList guests={guests} />
      </Content>
    </Layout>
  );
};
