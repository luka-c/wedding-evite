import { FC } from "hono/jsx";
import { css } from "hono/css";

export const Footer: FC = () => {
  return (
    <footer class={footerStyles}>
      <div>
        <span class="text-lg">Petra</span>
        <a class="text-lg" href="tel:+385 91 1579 587">
          +385 91 1579 587
        </a>
      </div>
      <div>
        <span class="text-lg">Tomislav</span>
        <a class="text-lg" href="tel:+385 95 5204 009">
          +385 95 5204 009
        </a>
      </div>
    </footer>
  );
};

const footerStyles = css`
  border-top: 0.8px solid var(--muted-foreground);
  width: 100%;
  display: flex;
  justify-content: center;
  gap: var(--gap-xl);
  padding-block: var(--padding-lg);

  a,
  span {
    color: var(--primary);
    font-weight: 400;
  }

  span {
    margin-right: var(--margin-sm);
  }

  @media screen and (width < 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
