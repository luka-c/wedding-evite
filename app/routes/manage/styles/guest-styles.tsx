import { css } from "hono/css";

export const listWrapper = css`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  margin-top: var(--margin-lg);
`;

export const guestCard = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--padding-md) var(--padding-lg);
  background-color: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
`;

export const guestInfo = css`
  display: flex;
  flex-direction: column;
`;

export const actionButtons = css`
  display: flex;
  gap: var(--gap-sm);
`;

export const btnPrimary = css`
  background-color: var(--primary);
  color: var(--primary-foreground);
  padding: var(--padding-sm) var(--padding-md);
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
`;

export const btnSecondary = css`
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  padding: var(--padding-sm) var(--padding-md);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  cursor: pointer;
`;

export const btnDestructive = css`
  background-color: var(--destructive);
  color: var(--primary-foreground);
  padding: var(--padding-sm) var(--padding-md);
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
`;

export const formGroup = css`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xs);
  margin-top: var(--margin-md);

  input {
    background: var(--input);
    color: var(--foreground);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: var(--padding-sm);
  }
`;

export const dialogActions = css`
  display: flex;
  justify-content: flex-end;
  gap: var(--gap-sm);
  margin-top: var(--margin-lg);
`;

export const dialogStyle = css`
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--padding-lg);
  width: 100%;
  max-width: 400px;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
  }
`;
