import { css } from "hono/css";

export const centerContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 4rem;
`;

export const rsvpContainer = css`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
  margin-top: 2rem;
`;

export const formStyle = css`
  background: var(--card);
  padding: var(--padding-xl);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
  margin-top: var(--margin-lg);
`;

export const formGroup = css`
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  margin-bottom: var(--margin-lg);
`;

export const successAlert = css`
  --color: #228b22;
  color: var(--color);
  background-color: oklch(from var(--color) l c h / 0.2);
  padding: var(--padding-md);
  border-radius: var(--radius-sm);
  text-align: center;
  margin-top: var(--margin-xl);
`;
