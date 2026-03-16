import { tGuest } from "../../manage/types/guest.type.ts";

export type tRsvpContainerProps = {
  guest: tGuest;
} & {
  [key: string]: unknown;
};
