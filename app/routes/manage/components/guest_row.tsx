import { FC } from "hono/jsx";
import { tGuest } from "../types/guest.type.ts";
import { EditGuestDialog } from "./edit-guest-dialog.tsx";
import {
  guestCard,
  guestInfo,
  actionButtons,
  btnSecondary,
  btnDestructive,
  guestCardContainer,
} from "../styles/guest-styles.tsx";
import { DeleteGuestDialog } from "./delete-guest-dialog.tsx";
import { css, cx } from "hono/css";

export const GuestRow: FC<{ guest: tGuest }> = ({ guest }) => {
  return (
    <div class={guestCardContainer}>
      <div class={guestCard}>
        <div class={guestInfo}>
          <p class={cx("text-xl", nameBlock)}>
            <span class={cx(status, guest.confirmed ? "confirmed" : "")}></span>
            <span class="text-xl">
              {guest.names}{" "}
              <span class={cx("text-xl", muted)}>{guest.surname && `(${guest.surname})`}</span>
            </span>
          </p>
          <p class="text-sm" style="margin-top: var(--margin-sm);">
            Pozvano: {guest.max_attending}
          </p>
          <p class="text-sm">Dolazi: {guest.confirmed ? guest.attending : 0}</p>
        </div>

        <div class={actionButtons}>
          <button
            type="button"
            class={btnSecondary}
            onclick={`
            const url = window.location.origin + '/?id=${guest.id}';
            navigator.clipboard.writeText(url);
            window.showToast('Link kopiran uspješno!', 0);
          `}
          >
            <img src="static/svg/copy.svg" alt="" />
            Kopiraj Link
          </button>

          <button
            type="button"
            class={btnSecondary}
            onclick={`document.getElementById('edit-${guest.id}').showModal()`}
          >
            <img src="static/svg/pencil.svg" alt="" />
            Uredi
          </button>

          <button
            type="button"
            class={btnDestructive}
            onclick={`document.getElementById('delete-${guest.id}').showModal()`}
          >
            <img src="static/svg/trash.svg" alt="" />
            Obriši
          </button>
        </div>

        <EditGuestDialog guest={guest} />
        <DeleteGuestDialog guest={guest} />
      </div>
    </div>
  );
};

const status = css`
  width: 8px;
  height: 8px;
  background: goldenrod;
  border-radius: 100%;
  margin-top: 1px;

  &.confirmed {
    background: #228b22;
  }
`;

const nameBlock = css`
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
`;

const muted = css`
  color: var(--muted-foreground);
`;
