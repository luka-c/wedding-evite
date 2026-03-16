import { FC } from "hono/jsx";
import { tGuest } from "../types/guest.type.ts";
import {
  dialogStyle,
  formGroup,
  dialogActions,
  btnSecondary,
  btnPrimary,
} from "../styles/guest-styles.tsx";

export const EditGuestDialog: FC<{ guest: tGuest }> = ({ guest }) => {
  return (
    <dialog id={`edit-${guest.id}`} class={dialogStyle}>
      <form method="post" action={`/manage/guests/${guest.id}/edit`}>
        <h2 class="text-3xl">Uredi gosta</h2>

        <div class={formGroup}>
          <label class="text-sm">Ime</label>
          <input type="text" name="names" value={guest.names} required />
        </div>

        <div class={formGroup}>
          <label class="text-sm">Broj dolazaka</label>
          <input type="number" name="attending" value={guest.attending.toString()} required />
        </div>

        <div class={dialogActions}>
          <button type="button" class={btnSecondary} onclick="this.closest('dialog').close()">
            Odustani
          </button>
          <button type="submit" class={btnPrimary}>
            Spremi
          </button>
        </div>
      </form>
    </dialog>
  );
};
