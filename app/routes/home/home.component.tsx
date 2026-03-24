import { FC } from "hono/jsx";
import { Layout } from "../../core/components/layout.tsx";
import { Content } from "../../core/components/content.tsx";
import { successAlert, invitedHeader, info } from "./styles/home.styles.ts";
import { tHomeProps } from "./props/home.props.ts";
import { InvalidLinkDisclaimer } from "./components/invalid_link_disclaimer.tsx";
import { RsvpContainer } from "./components/rsvp_container.tsx";
import { HeroText } from "./components/hero_text.tsx";
import { cx } from "hono/css";
import { PersonalMessage } from "./components/personal_message.tsx";
import { WeddingInfo } from "./components/wedding_info.tsx";
import { ConfirmForm } from "./components/confirm_form.tsx";
import { Footer } from "../../core/components/footer.tsx";

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
                <WeddingInfo />

                <PersonalMessage names={guest.names} />

                <hr />

                {guest.confirmed ? (
                  <div class={cx(successAlert, "text-lg")}>
                    Hvala vam! Uspješno ste potvrdili svoj status dolaska.
                  </div>
                ) : (
                  <ConfirmForm guest={guest} />
                )}
              </div>
            </RsvpContainer>
          </>
        )}
      </Content>
      <Footer />
    </Layout>
  );
};
