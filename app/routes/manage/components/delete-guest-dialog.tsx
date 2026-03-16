import { FC } from "hono/jsx";
import { tGuest } from "../types/guest.type.ts";
import {
  dialogActions,
  btnSecondary,
  btnDestructive,
  dialogStyle,
} from "../styles/guest-styles.tsx";

export const DeleteGuestDialog: FC<{ guest: tGuest }> = ({ guest }) => {
  return (
    <dialog id={`delete-${guest.id}`} class={dialogStyle}>
      <form method="post" action={`/manage/guests/${guest.id}/delete`}>
        <h2 class="text-3xl">Brisanje</h2>

        <p class="text-md">Jeste li sigurni da želite obrisati {guest.names}?</p>

        <div class={dialogActions}>
          <button type="button" class={btnSecondary} onclick="this.closest('dialog').close()">
            Odustani
          </button>

          <button type="submit" class={btnDestructive}>
            Obriši
          </button>
        </div>
      </form>
    </dialog>
  );
};
