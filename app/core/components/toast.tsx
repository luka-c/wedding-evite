import { FC } from "hono/jsx";
import { css } from "hono/css";
import { tToastProps } from "../props/toast.props.tsx";

export const Toast: FC<tToastProps> = (props) => {
  return (
    <div id="toast" class={toastStyle}>
      {props.message}
    </div>
  );
};

const toastStyle = css`
  background-color: var(--primary);
  color: var(--primary-foreground);
  padding: var(--padding-md) var(--padding-xl);
  border-radius: var(--radius);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  font-weight: 500;

  opacity: 1;
  transform: translateY(0);

  transition: all 0.3s var(--timing-function);

  @starting-style {
    opacity: 0;
    transform: translateY(1rem);
  }
`;
