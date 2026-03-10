import { FC } from "hono/jsx";
import { Layout } from "../../core/components/layout.tsx";
import { Header } from "../../core/components/header.tsx";
import { Content } from "../../core/components/content.tsx";

export const Manage: FC = (_) => {
  return (
    <Layout title="Upravljanje pozivnicama">
      <Header />
      <Content>
        <h1 class="text-7xl">Pozvani ljudi</h1>
      </Content>
    </Layout>
  );
};
