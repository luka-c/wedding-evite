import { FC } from "hono/jsx";
import { Layout } from "../../core/components/layout.tsx";

export const Home: FC = () => {
  return (
    <Layout title="Pozvani ste na vjenčanje">
      <h1 class="text-2xl">Homepage</h1>
      <List />
    </Layout>
  );
};

import { Fragment } from "hono/jsx";

const List = () => (
  <Fragment>
    <p>first child</p>
    <p>second child</p>
    <p>third child</p>
  </Fragment>
);
