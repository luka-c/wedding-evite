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
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
  width: min(100%, 30ch);
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

export const invitedHeader = css`
  text-align: center;
  margin-bottom: var(--margin-4xl);
  font-weight: 400;

  @media screen and (width > 1024px) {
    margin-bottom: var(--margin-7xl);
  }
`;

export const info = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap-xxl);
  margin-bottom: var(--margin-7xl);
`;

export const timeline = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-xl);

  span {
    font-weight: 400;
  }
`;

export const infoHeader = css`
  font-weight: 500;
`;

export const pleaseConfirm = css`
  font-weight: 400;
  text-align: center;
  text-wrap: balance;
`;

export const submitButton = css`
  font-weight: 400;
`;

export const ornament = css`
  width: min(90%, 500px);
`;
