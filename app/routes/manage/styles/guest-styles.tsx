import { css } from "hono/css";

export const listWrapper = css`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  margin-top: var(--margin-lg);
`;

export const guestCardContainer = css`
  container-name: guestCard;
  container-type: inline-size;
`;

export const guestCard = css`
  display: flex;
  justify-content: space-between;
  gap: var(--gap-lg);
  align-items: center;
  padding: var(--padding-md) var(--padding-lg);
  background-color: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);

  @container guestCard (width < 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const guestInfo = css`
  display: flex;
  flex-direction: column;
`;

export const actionButtons = css`
  display: flex;
  gap: var(--gap-sm);

  @container guestCard (width < 500px) {
    width: 100%;
    button {
      flex: 1;
    }
  }
`;

export const btnPrimary = css`
  background-color: var(--primary);
  color: var(--primary-foreground);
`;

export const btnSecondary = css`
  background-color: var(--secondary);
  color: var(--secondary-foreground);

  border: 1px solid var(--border);
`;

export const btnDestructive = css`
  background-color: var(--destructive);
  color: var(--primary-foreground);
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
  margin-top: var(--margin-2xl);
`;

export const dialogStyle = css`
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--padding-lg);
  width: 100%;
  max-width: 400px;
  margin: auto;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
  }

  h2 {
    margin-bottom: var(--margin-xl);
  }
`;
