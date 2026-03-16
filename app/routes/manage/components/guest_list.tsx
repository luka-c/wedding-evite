import { FC } from "hono/jsx";
import { tGuest } from "../types/guest.type.ts";
import { listWrapper } from "../styles/guest-styles.tsx";
import { GuestRow } from "./guest_row.tsx";

export const GuestList: FC<{ guests: tGuest[] }> = ({ guests }) => {
  return (
    <div class={listWrapper}>
      {guests.length === 0 ? (
        <p class="text-md">Nema pozvanih gostiju.</p>
      ) : (
        guests.map((guest) => <GuestRow key={guest.id} guest={guest} />)
      )}
    </div>
  );
};
