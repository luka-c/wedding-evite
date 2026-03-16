import { FC } from "hono/jsx";
import { centerContent } from "../styles/home.styles.ts";

export const InvalidLinkDisclaimer: FC = () => {
  return (
    <div class={centerContent}>
      <h1 class="text-5xl">Dobrodošli!</h1>
      <p class="text-xl">
        Molimo koristite personalizirani link iz vaše pozivnice za potvrdu dolaska.
      </p>
    </div>
  );
};
