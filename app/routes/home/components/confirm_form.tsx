import { FC } from "hono/jsx";
import { tConfirmFormProps } from "../props/confirm_form.props.tsx";
import { btnPrimary } from "../../manage/styles/guest-styles.tsx";
import { formStyle, submitButton } from "../styles/home.styles.ts";
import { cx } from "hono/css";

export const ConfirmForm: FC<tConfirmFormProps> = (props) => {
  return (
    <form method="post" action="/rsvp" class={formStyle}>
      <input type="hidden" name="id" value={props.guest.id} />

      <input
        type="number"
        style="text-align: center; border-color: var(--primary);"
        name="attending"
        disabled={props.guest.confirmed}
        value={
          props.guest.confirmed
            ? props.guest.attending.toString()
            : props.guest.max_attending.toString()
        }
        min="0"
        max={props.guest.max_attending.toString()}
        inputmode="numeric"
        required
      />

      <button
        disabled={props.guest.confirmed}
        type="submit"
        class={cx(btnPrimary, submitButton, "text-xl")}
      >
        Potvrdi dolazak
      </button>
    </form>
  );
};
