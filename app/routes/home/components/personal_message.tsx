import { css, cx } from "hono/css";
import { pleaseConfirm } from "../styles/home.styles.ts";
import { tPersonalMessageProps } from "../props/personal_message.props.tsx";
import { FC } from "hono/jsx";

export const PersonalMessage: FC<tPersonalMessageProps> = (props) => {
  return (
    <div class={names}>
      <span class="text-xl">Dragi {props.names}</span>

      <span class={cx(pleaseConfirm, "text-xl")}>
        Molimo Vas da nam potvrdite svoj dolazak i broj gostiju do 1. lipnja 2026.
      </span>
    </div>
  );
};

const names = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-xl);
  span {
    font-weight: 400;
  }
`;
