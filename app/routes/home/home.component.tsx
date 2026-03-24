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
  pleaseConfirm,
  submitButton,
  ornament,
} from "./styles/home.styles.ts";
import { tHomeProps } from "./props/home.props.ts";
import { InvalidLinkDisclaimer } from "./components/invalid_link_disclaimer.tsx";
import { RsvpContainer } from "./components/rsvp_container.tsx";
import { btnPrimary } from "../manage/styles/guest-styles.tsx";
import { HeroText } from "./components/hero_text.tsx";
import { cx } from "hono/css";

export const Home: FC<tHomeProps> = ({ guest }) => {
  return (
    <Layout title="Dobrodošli | RSVP">
      <Content class="home">
        {!guest ? (
          <InvalidLinkDisclaimer />
        ) : (
          <>
            <h2 class={cx(invitedHeader, "text-2xl")}>Pozivamo Vas na naše vjenčanje!</h2>
            <HeroText />
            <RsvpContainer guest={guest}>
              <div className={info}>
                <h5 class={cx("text-3xl", infoHeader)}>27. LIPNJA 2026.</h5>

                <img class={ornament} src="static/svg/ornament.svg" />

                <div class={timeline}>
                  <h5 class={cx("text-3xl", infoHeader)}>MANSION EVENT RESORT</h5>
                  <span class="text-xl">Okupljanje u 17.30 h</span>
                  <span class="text-xl">Ceremonija u 18 h</span>
                  <span class="text-xl">Svečana večera u 20 h</span>
                </div>

                <img class={ornament} src="static/svg/ornament.svg" />

                <span class={cx(pleaseConfirm, "text-xl")}>
                  Molimo vas da nam potvrdite svoj dolazak i broj gostiju do 1. lipnja 2026.
                </span>

                <hr />

                {guest.confirmed ? (
                  <div class={cx(successAlert, "text-lg")}>
                    Hvala vam! Uspješno ste potvrdili svoj status dolaska.
                  </div>
                ) : (
                  <form method="post" action="/rsvp" class={formStyle}>
                    <input type="hidden" name="id" value={guest.id} />

                    <input
                      type="number"
                      name="attending"
                      disabled={guest.confirmed}
                      value={
                        guest.confirmed
                          ? guest.attending.toString()
                          : guest.max_attending.toString()
                      }
                      min="0"
                      max={guest.max_attending.toString()}
                      inputmode="numeric"
                      required
                    />

                    <button
                      disabled={guest.confirmed}
                      type="submit"
                      class={cx(btnPrimary, submitButton, "text-xl")}
                    >
                      Potvrdi dolazak
                    </button>
                  </form>
                )}
              </div>
            </RsvpContainer>
          </>
        )}
      </Content>
    </Layout>
  );
};
