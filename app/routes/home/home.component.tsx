import { FC } from "hono/jsx";
import { Layout } from "../../core/components/layout.tsx";
import { Content } from "../../core/components/content.tsx";
import { successAlert, formStyle, formGroup } from "./styles/home.styles.ts";
import { tHomeProps } from "./props/home.props.ts";
import { InvalidLinkDisclaimer } from "./components/invalid_link_disclaimer.tsx";
import { RsvpContainer } from "./components/rsvp_container.tsx";
import { btnPrimary } from "../manage/styles/guest-styles.tsx";

export const Home: FC<tHomeProps> = ({ guest, success }) => {
  return (
    <Layout title="Dobrodošli | RSVP">
      <Content>
        {!guest ? (
          <InvalidLinkDisclaimer />
        ) : (
          <RsvpContainer guest={guest}>
            {success && (
              <div class={successAlert}>Hvala vam! Uspješno ste ažurirali svoj status dolaska.</div>
            )}

            <form method="post" action="/rsvp" class={formStyle}>
              <input type="hidden" name="id" value={guest.id} />

              <div class={formGroup}>
                <label class="text-lg">Broj prisutnih osoba</label>

                <input
                  type="number"
                  name="attending"
                  value={guest.attending.toString()}
                  min="1"
                  inputmode="numeric"
                  required
                />
              </div>

              <button type="submit" class={btnPrimary}>
                Potvrdi dolazak
              </button>
            </form>
          </RsvpContainer>
        )}
      </Content>
    </Layout>
  );
};
