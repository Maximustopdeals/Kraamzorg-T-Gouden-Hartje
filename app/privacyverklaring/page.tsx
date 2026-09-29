import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Privacyverklaring van Kraamzorg 'T Gouden Hartje: hoe wij zorgvuldig omgaan met jouw persoonsgegevens.",
  alternates: { canonical: "/privacyverklaring" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "50rem" }}>
        <span className="eyebrow">Privacy</span>
        <h1>Privacyverklaring</h1>
        <p className="lead">
          {site.name} hecht veel waarde aan de bescherming van jouw
          persoonsgegevens. In deze verklaring lees je hoe wij daarmee omgaan.
        </p>

        <h2>Welke gegevens verzamelen wij?</h2>
        <p>
          Via het contactformulier vragen wij alleen gegevens die nodig zijn
          voor het eerste contact en het plannen van een kennismakingsgesprek:
          je naam, contactgegevens, adres, uitgerekende datum en praktische
          informatie over de bevalling. Wij vragen via de website niet om
          medische gegevens of andere bijzondere persoonsgegevens.
        </p>

        <h2>Waarvoor gebruiken wij jouw gegevens?</h2>
        <p>
          Uitsluitend om contact met je op te nemen naar aanleiding van je
          aanvraag en om de kraamzorg te organiseren. Je gegevens worden nooit
          verkocht of gedeeld met derden voor marketingdoeleinden.
        </p>

        <h2>Hoe lang bewaren wij gegevens?</h2>
        <p>
          Wij bewaren je gegevens niet langer dan noodzakelijk voor het doel
          waarvoor ze zijn verstrekt, of zolang de wet dat vereist.
        </p>

        <h2>Cookies en statistieken</h2>
        <p>
          Deze website gebruikt analytische cookies (Google Analytics via Google
          Tag Manager) om het gebruik van de website te meten en te verbeteren.
          Er worden geen marketingcookies geplaatst zonder toestemming.
        </p>

        <h2>Jouw rechten</h2>
        <p>
          Je hebt recht op inzage, correctie of verwijdering van je
          persoonsgegevens. Neem hiervoor contact op via{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> of bel{" "}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>

        <h2>Contact</h2>
        <p>
          {site.name}
          <br />
          {site.address.street}, {site.address.city}
          <br />
          KvK: {site.kvk}
        </p>
      </div>
    </section>
  );
}
