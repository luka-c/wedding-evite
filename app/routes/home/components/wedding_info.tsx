import { FC } from "hono/jsx";
import { infoHeader, ornament, timeline } from "../styles/home.styles.ts";
import { cx } from "hono/css";

export const WeddingInfo: FC = () => {
  return (
    <>
      <h5 class={cx("text-3xl", infoHeader)}>27. LIPNJA 2026.</h5>

      <img class={ornament} src="static/svg/ornament.svg" />

      <div class={timeline}>
        <h5 class={cx("text-3xl", infoHeader)}>MANSION EVENT RESORT</h5>
        <span class="text-xl">Okupljanje u 17.30 h</span>
        <span class="text-xl">Ceremonija u 18 h</span>
        <span class="text-xl">Svečana večera u 20 h</span>
      </div>

      <img class={ornament} src="static/svg/ornament.svg" />
    </>
  );
};
