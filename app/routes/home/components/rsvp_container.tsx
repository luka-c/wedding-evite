import { FC } from "hono/jsx";
import { rsvpContainer } from "../styles/home.styles.ts";
import { tRsvpContainerProps } from "../props/rsvp_container.props.ts";

export const RsvpContainer: FC<tRsvpContainerProps> = (props) => {
  return <div class={rsvpContainer}>{props.children}</div>;
};
