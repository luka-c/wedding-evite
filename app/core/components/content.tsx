import { FC } from "hono/jsx";
import { css, cx } from "hono/css";
import { tContentProps } from "../props/content.props.tsx";

export const Content: FC<tContentProps> = (props) => {
  return <div class={cx(wrapperClass, props.class as string)}>{props.children}</div>;
};

const wrapperClass = css`
  max-width: 1200px;
  margin-inline: auto;
  padding: var(--padding-xl) var(--padding-lg) 0;

  @media screen and (width > 1024px) {
    padding: var(--margin-7xl) var(--margin-3xl) 0;

    &.home {
      padding: var(--padding-xl) 0 0;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
