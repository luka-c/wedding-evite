import { FC } from "hono/jsx";
import { Layout } from "../../core/components/layout.tsx";
import { Content } from "../../core/components/content.tsx";
import {
  successAlert,
  formStyle,
  invitedHeader,
  info,
  infoHeader,
  timeline,
} from "./styles/home.styles.ts";
import { tHomeProps } from "./props/home.props.ts";
import { InvalidLinkDisclaimer } from "./components/invalid_link_disclaimer.tsx";
import { RsvpContainer } from "./components/rsvp_container.tsx";
import { btnPrimary } from "../manage/styles/guest-styles.tsx";
import { HeroText } from "./components/hero_text.tsx";
import { cx } from "hono/css";

export const Home: FC<tHomeProps> = ({ guest, success }) => {
  return (
    <Layout title="Dobrodošli | RSVP">
      <Content>
        {!guest ? (
          <InvalidLinkDisclaimer />
        ) : (
          <>
            <h2 class={cx(invitedHeader, "text-2xl")}>Pozivamo vas na vjenčanje {guest.names}!</h2>
            <HeroText />
            <RsvpContainer guest={guest}>
              <div className={info}>
                <h5 class={cx("text-xl", infoHeader)}>27. LIPNJA 2026.</h5>

                <hr />

                <div class={timeline}>
                  <h5 class={cx("text-xl", infoHeader)}>MANSION EVENT RESORT</h5>
                  <span>Okupljanje u 17.30 h</span>
                  <span>Ceremonija u 18 h</span>
                  <span>Svečana večera u 20 h</span>
                </div>

                <hr />

                <span>Molimo potvrdite svoj dolazak do 1. lipnja 2026.</span>

                {success && (
                  <div class={successAlert}>
                    Hvala vam! Uspješno ste ažurirali svoj status dolaska.
                  </div>
                )}

                <form method="post" action="/rsvp" class={formStyle}>
                  <input type="hidden" name="id" value={guest.id} />

                  <button type="submit" style="margin-top: 1rem;" class={btnPrimary}>
                    Potvrdi dolazak
                  </button>
                </form>
              </div>
            </RsvpContainer>
          </>
        )}
      </Content>
    </Layout>
  );
};
