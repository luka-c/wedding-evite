import { FC } from "hono/jsx";
import { tGuest } from "../types/guest.type.ts";
import { listWrapper } from "../styles/guest-styles.tsx";
import { GuestRow } from "./guest_row.tsx";
import { css } from "hono/css";

export const GuestList: FC<{ guests: tGuest[] }> = ({ guests }) => {
  return (
    <div class={listWrapper}>
      <div class={count}>
        <span class={chip}>
          Ukupno pozvano:{" "}
          <strong>
            {guests.map((guest) => guest.max_attending).reduce((prev, sum) => (sum += prev))}
          </strong>
        </span>

        <div class={vertical}></div>

        <span class={chip}>
          Ukupno potvrđeno:{" "}
          <strong>
            {guests.map((guest) => guest.attending).reduce((prev, sum) => (sum += prev))}
          </strong>
        </span>
      </div>
      {guests.length === 0 ? (
        <p class="text-md">Nema pozvanih gostiju.</p>
      ) : (
        guests.map((guest) => <GuestRow key={guest.id} guest={guest} />)
      )}
    </div>
  );
};

const chip = css`
  border-radius: var(--radius-4xl);
  padding-inline: var(--padding-sm);
`;

const count = css`
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  margin-block: var(--margin-lg) var(--margin-xs);

  strong {
    font-weight: bold;
  }
`;

const vertical = css`
  width: 1px;
  height: 1.5rem;
  background-color: var(--primary);
`;
