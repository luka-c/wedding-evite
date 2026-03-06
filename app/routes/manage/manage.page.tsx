import { FC } from "hono/jsx";
import { Layout } from "../../core/components/layout.tsx";
import { Header } from "../../core/components/header.tsx";

export const Manage: FC = (_) => {
  return (
    <Layout title="Upravljanje pozivnicama">
      <Header />
      <h1>Pozvani ljudi</h1>
    </Layout>
  );
};
