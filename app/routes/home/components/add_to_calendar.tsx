import { FC } from "hono/jsx";
import { CalendarIcon } from "./calendar_icon.tsx";
import { css, cx } from "hono/css";

export const AddToCalendar: FC = () => {
  return (
    <a
      class={cx(calendarWrapper, "text-lg")}
      href="/static/events.ics"
      download="vjencanje-petra-tomislav.ics"
    >
      <CalendarIcon />
      Dodaj u kalendar
    </a>
  );
};

const calendarWrapper = css`
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
  svg {
    height: 2rem;
    width: 2rem;
  }
`;
