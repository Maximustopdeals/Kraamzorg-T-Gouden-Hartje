import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { aanpak, usps } from "@/lib/content";
import { IconCheck, IconHeart, IconShield, IconStar } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kraamzorg Almere | Warm & Persoonlijk | 'T Gouden Hartje",
  description:
    "Professionele kraamzorg in Almere met warmte, aandacht en rust. 'T Gouden Hartje biedt persoonlijke begeleiding tijdens jouw kraamtijd, met oog voor jouw gewoonten en wensen.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">Kraamzorg Almere, warm &amp; persoonlijk</span>
            <h1>Ervaar kraamzorg in Almere met warmte, aandacht en rust</h1>
            <p className="lead">
              Kies voor kraamzorg &apos;T Gouden Hartje, jouw vertrouwde steun in de
              kraamtijd. Persoonlijke en professionele begeleiding voor moeder,
              baby en het hele gezin — met oog voor jouw gewoonten en wensen.
            </p>
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={site.signupUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inschrijven voor kraamzorg
              </a>
              <Link className="btn btn--outline" href="/kraamzorg-almere">
                Lees meer
              </Link>
            </div>
            <ul className="check-list" style={{ marginTop: "1.5rem" }}>
              <li>
                <IconCheck />
                <span>Betrouwbaar en zeer ervaren, met 20+ jaar in de kraamzorg</span>
              </li>
              <li>
                <IconCheck />
                <span>Persoonlijke zorg aan huis in Almere en omgeving</span>
              </li>
              <li>
                <IconCheck />
                <span>Ruimte voor jouw cultuur, taal en gewoonten</span>
              </li>
            </ul>
          </div>
          <div className="hero__media">
            <div className="img-frame">
              <Image
                src="/images/pasgeboren-baby-mutsje-kraamzorg-almere.webp"
                alt="Pasgeboren baby met gehaakt mutsje slaapt rustig, kraamzorg 'T Gouden Hartje Almere"
                width={800}
                height={893}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                fetchPriority="high"
              />
            </div>
            <span className="hero__badge">
              <IconHeart
                width={16}
                height={16}
                style={{ display: "inline", verticalAlign: "-3px", color: "var(--primary)" }}
              />{" "}
              Persoonlijke zorg voor <strong>moeder en kind</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Welkom */}
      <section className="section">
        <div className="container grid-2">
          <div className="img-frame">
            <Image
              src="/images/pasgeboren-baby-slaapt-kraamzorg-almere.webp"
              alt="Pasgeboren baby die rustig slaapt, verzorgd door kraamzorg 'T Gouden Hartje"
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <span className="eyebrow">Welkom bij Kraamzorg &apos;T Gouden Hartje</span>
            <h2>Professionele kraamzorg in Almere</h2>
            <p>
              Als ervaren kraamverzorgende in Almere en omliggende gebieden bied
              ik liefdevolle en professionele kraamzorg aan huis.
            </p>
            <p>
              Ontdek hoe ik jou en je gezin kan ondersteunen tijdens deze
              bijzondere tijd.
            </p>
            <ul className="check-list">
              {usps.slice(0, 4).map((u) => (
                <li key={u}>
                  <IconCheck />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/over-mij">
                Maak kennis met Hanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mijn aanpak */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Mijn aanpak bij Kraamzorg &apos;T Gouden Hartje</span>
            <h2>Mijn belofte aan jou</h2>
            <p className="lead">Zes kernwoorden die mijn manier van werken samenvatten.</p>
          </div>
          <div className="grid-3">
            {aanpak.map((item) => (
              <article className="card" key={item.title}>
                <div className="card__icon">
                  <IconShield />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* USP's */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Waarom kraamzorg &apos;T Gouden Hartje</span>
            <h2>Persoonlijke kraamzorg, met aandacht voor jouw gezin</h2>
            <p className="lead">
              Niet zomaar kraamzorg, maar een warme en professionele start voor
              jouw gezin in Almere en omgeving.
            </p>
            <div className="stat-row" style={{ marginTop: "1.5rem" }}>
              <div className="stat">
                <strong>20+</strong>
                <span>jaar ervaring</span>
              </div>
              <div className="stat">
                <strong>24–80</strong>
                <span>uur zorg op maat</span>
              </div>
              <div className="stat">
                <strong>8–10</strong>
                <span>dagen begeleiding</span>
              </div>
            </div>
          </div>
          <div>
            <ul className="check-list card" style={{ display: "grid", gap: "1rem" }}>
              {usps.map((u) => (
                <li key={u}>
                  <IconCheck />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Zorg op maat — cultuur, taal & gewoonten */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Zorg op maat</span>
            <h2>Kraamzorg die past bij jouw gezin, gewoonten en wensen</h2>
            <p className="lead">
              Elk gezin is anders. Of je nu kiest voor vertrouwde Nederlandse
              kraamzorg of extra aandacht wilt voor culturele en religieuze
              gebruiken, bij kraamzorg &apos;T Gouden Hartje voel je je thuis.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <div className="card__icon">
                <IconHeart />
              </div>
              <h3>Respect voor jouw gewoonten</h3>
              <p>
                Ruimte voor jouw rituelen, voedingswensen en familietradities.
                Ik stem de zorg af op wat voor jullie belangrijk is zonder
                oordeel, met aandacht.
              </p>
            </article>
            <article className="card">
              <div className="card__icon">
                <IconCheck />
              </div>
              <h3>Meerdere talen</h3>
              <p>
                Begeleiding in het Nederlands, Engels, Arabisch en Berbers
                zodat je je echt begrepen voelt in een kwetsbare
                periode.
              </p>
            </article>
            <article className="card">
              <div className="card__icon">
                <IconShield />
              </div>
              <h3>Persoonlijke afstemming</h3>
              <p>
                Tijdens het intakegesprek bespreken we jouw wensen rondom
                privacy, hygiëne, voeding en bezoek. Jij bepaalt, ik
                ondersteun.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <span className="eyebrow" style={{ color: "var(--color-gold-300)" }}>
              Kraamzorg in Almere en omgeving
            </span>
            <h2>Vraag een vrijblijvend kennismakingsgesprek aan</h2>
            <p>
              Bij kraamzorg &apos;T Gouden Hartje bied ik persoonlijke en professionele
              begeleiding tijdens deze bijzondere periode in je leven. Als
              ervaren kraamverzorgende sta ik voor je klaar met liefdevolle zorg
              en deskundig advies afgestemd op jouw gezin.
            </p>
            <div className="hero__actions">
              <a
                className="btn btn--gold"
                href={site.signupUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inschrijven voor kraamzorg
              </a>
              <Link className="btn btn--ghost-light" href="/contact">
                Stel een vraag
              </Link>
            </div>
            <div className="cta-band__meta">
              <span>
                <IconStar
                  width={14}
                  height={14}
                  style={{ display: "inline", verticalAlign: "-2px" }}
                />{" "}
                Beoordeeld door gezinnen uit Almere
              </span>
              <span>Reactie binnen 24 uur</span>
              <span>Vrijblijvend kennismaken</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
