import { FC } from "hono/jsx";
import { tGuest } from "../types/guest.type.ts";
import { EditGuestDialog } from "./edit-guest-dialog.tsx";
import {
  guestCard,
  guestInfo,
  actionButtons,
  btnSecondary,
  btnDestructive,
} from "../styles/guest-styles.tsx";

export const GuestRow: FC<{ guest: tGuest }> = ({ guest }) => {
  return (
    <div class={guestCard}>
      <div class={guestInfo}>
        <p class="text-xl">{guest.names}</p>
        <p class="text-sm">Dolazi: {guest.attending}</p>
      </div>

      <div class={actionButtons}>
        <button
          type="button"
          class={btnSecondary}
          onclick={`
            const url = window.location.origin + '/?id=${guest.id}';
            navigator.clipboard.writeText(url);
            alert('Link kopiran: ' + url);
          `}
        >
          Kopiraj Link
        </button>

        <button
          type="button"
          class={btnSecondary}
          onclick={`document.getElementById('edit-${guest.id}').showModal()`}
        >
          Uredi
        </button>

        <button
          type="button"
          class={btnDestructive}
          onclick={`document.getElementById('delete-${guest.id}').showModal()`}
        >
          Obriši
        </button>
      </div>

      <EditGuestDialog guest={guest} />
      <EditGuestDialog guest={guest} />
    </div>
  );
};
