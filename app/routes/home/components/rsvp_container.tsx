import { FC } from "hono/jsx";
import { rsvpContainer } from "../styles/home.styles.ts";
import { tRsvpContainerProps } from "../props/rsvp_container.props.ts";

export const RsvpContainer: FC<tRsvpContainerProps> = (props) => {
  return (
    <div class={rsvpContainer}>
      <h1 class="text-6xl text-center">Dobrodošli, {props.guest.names}!</h1>
      <p class="text-xl text-center mt-4 text-muted-foreground">
        Veselimo se vašem dolasku. Molimo potvrdite broj osoba koje dolaze.
      </p>

      {props.children}
    </div>
  );
};
