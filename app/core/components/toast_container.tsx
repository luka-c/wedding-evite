import { FC } from "hono/jsx";
import { css } from "hono/css";

export const ToastManager: FC = () => {
  return <div id="toast-container" class={toastContainerStyle}></div>;
};

const toastContainerStyle = css`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  z-index: 999;
`;
