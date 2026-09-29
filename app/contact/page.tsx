import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { IconMail, IconPhone, IconPin, IconWhatsapp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact | Kraamzorg 'T Gouden Hartje in Almere",
  description:
    "Contact opnemen met Kraamzorg 'T Gouden Hartje in Almere. Vragen of vrijblijvend kennismaken? Bel, mail of stuur een WhatsApp-bericht.",
  alternates: { canonical: "/contact" },
};

const gebieden = ["Almere", "Bussum", "Huizen", "Utrecht", "Amsterdam", "Amersfoort"];

export default function ContactPage() {
  return (
    <>
      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: "50rem" }}>
          <div className="section-head">
            <span className="eyebrow">Contact</span>
            <h1>Contact opnemen met Kraamzorg &apos;T Gouden Hartje</h1>
            <p className="lead">
              Heb je vragen of wil je kennismaken? Neem gerust vrijblijvend
              contact op. Samen bespreken we hoe ik jou en je kindje kan
              ondersteunen tijdens deze bijzondere periode. Ik hoor graag van
              je!
            </p>
          </div>

          <div className="grid-3">
            <a className="card" href={site.phoneHref} style={{ textAlign: "center", textDecoration: "none" }}>
              <span className="img-badge" style={{ marginBottom: "var(--sp-3)", display: "inline-flex" }}>
                <IconPhone width={16} height={16} /> Bellen
              </span>
              <h3 style={{ fontSize: "var(--fs-lg)" }}>{site.phone}</h3>
              <p>Bereikbaar {site.hours}</p>
            </a>
            <a className="card" href={`mailto:${site.email}`} style={{ textAlign: "center", textDecoration: "none" }}>
              <span className="img-badge" style={{ marginBottom: "var(--sp-3)", display: "inline-flex" }}>
                <IconMail width={16} height={16} /> Mailen
              </span>
              <h3 style={{ fontSize: "var(--fs-base)", overflowWrap: "anywhere" }}>{site.email}</h3>
              <p>Reactie binnen 24 uur</p>
            </a>
            <a className="card" href={site.whatsapp} target="_blank" rel="noopener noreferrer" style={{ textAlign: "center", textDecoration: "none" }}>
              <span className="img-badge" style={{ marginBottom: "var(--sp-3)", display: "inline-flex" }}>
                <IconWhatsapp width={16} height={16} /> WhatsApp
              </span>
              <h3 style={{ fontSize: "var(--fs-lg)" }}>Stuur een bericht</h3>
              <p>Snel en informeel contact</p>
            </a>
          </div>

          <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4em", color: "var(--text-muted)", marginTop: "var(--sp-6)" }}>
            <IconPin width={16} height={16} />
            <span>{site.address.street}, {site.address.city}</span>
          </p>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="section section--tint" style={{ paddingBlock: "var(--sp-8)" }}>
        <div className="container" style={{ maxWidth: "50rem" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "var(--fs-2xl)" }}>Kraamzorg in Almere, &apos;t Gooi &amp; omgeving</h2>
            <p>
              Ik bied professionele kraamzorg in Almere, Bussum, Huizen,
              Utrecht, Amsterdam, Amersfoort en omliggende plaatsen. Staat
              jouw woonplaats er niet bij? Neem gerust contact op voor de
              mogelijkheden.
            </p>
            <ul className="pill-list" style={{ marginTop: "var(--sp-5)", justifyContent: "center" }}>
              {gebieden.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Formulier */}
      <section className="section">
        <div className="container" style={{ maxWidth: "44rem" }}>
          <div className="section-head">
            <span className="eyebrow">Aanmelden of kennismaken</span>
            <h2 style={{ fontSize: "var(--fs-2xl)" }}>Vraag een gesprek aan</h2>
            <p style={{ color: "var(--text-muted)" }}>
              Vul het formulier in, dan neem ik binnen 24 uur persoonlijk
              contact met je op.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
