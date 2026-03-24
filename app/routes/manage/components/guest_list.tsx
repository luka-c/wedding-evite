import { FC } from "hono/jsx";
import { tGuest } from "../types/guest.type.ts";
import { listWrapper } from "../styles/guest-styles.tsx";
import { GuestRow } from "./guest_row.tsx";
import { css } from "hono/css";

export const GuestList: FC<{ guests: tGuest[] }> = ({ guests }) => {
  return (
    <div className={listWrapper}>
      {guests.length === 0 ? (
        <p className="text-md">Nema pozvanih gostiju.</p>
      ) : (
        <>
          <div className={count}>
            <span className={chip}>
              Ukupno pozvano:{" "}
              <strong>{guests.reduce((sum, guest) => sum + (guest.max_attending || 0), 0)}</strong>
            </span>

            <div className={vertical}></div>

            <span className={chip}>
              Ukupno potvrđeno:{" "}
              <strong>{guests.reduce((sum, guest) => sum + (guest.attending || 0), 0)}</strong>
            </span>
          </div>

          {guests.map((guest) => (
            <GuestRow key={guest.id} guest={guest} />
          ))}
        </>
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
