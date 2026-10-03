import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { kraamzorgFaqs } from "@/lib/content";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import { IconCalendar, IconCheck, IconHeart, IconPhone, IconShield } from "@/components/icons";

export const metadata: Metadata = {
  title: "Persoonlijke Kraamzorg Almere | Ervaren Moeder & Professional",
  description:
    "Hanan El Morabit: waar moederliefde en medische expertise samenkomen. Professionele kraamzorg in Almere met persoonlijke aandacht voor jouw gezin, gewoonten en wensen.",
  alternates: { canonical: "/kraamzorg-almere" },
};

const stappen = [
  {
    title: "Aanmelding",
    text: "Binnen 5 minuten geregeld, direct duidelijkheid. Via de aanmeldknop kom je direct bij het digitale aanmeldformulier.",
    points: [
      "Eenvoudig formulier, alleen essentiële informatie",
      "Directe bevestiging, je weet meteen dat het gelukt is",
      "Persoonlijk contact, ik bel je binnen 24 uur",
    ],
  },
  {
    title: "Intakegesprek",
    text: "Bij jou thuis of via videobellen leren we elkaar echt kennen. Jouw kans om al je vragen te stellen en wensen te bespreken.",
    points: [
      "Uitgebreide tijd, minimaal 1 uur voor al je vragen",
      "Medische checklist, volledige gezondheidsinventarisatie",
      "Persoonlijk plan, op maat gemaakt zorgschema",
    ],
  },
  {
    title: "Nazorg",
    text: "Ook na de kraamweek sta je er niet alleen voor. Ik blijf bereikbaar voor vragen en aanvullende ondersteuning.",
    points: [
      "Bereikbaarheid, 2 weken lang telefonisch bereikbaar",
      "Informatiepakket, handige naslaggids mee naar huis",
      "Netwerk, doorverwijzing naar lokale ondersteuning",
    ],
  },
];

export default function KraamzorgPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Kraamzorg Almere", url: "/kraamzorg-almere" },
  ]);
  const faqs = faqJsonLd(kraamzorgFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">Kraamzorg in Almere bij &apos;T Gouden Hartje</span>
            <h1>Een warm welkom voor uw kleintje</h1>
            <p className="lead">
              Met 47 jaar levenservaring en moeder van vier begeleid ik u door
              de mooiste en kwetsbaarste periode van uw leven met oog voor
              wat voor uw gezin belangrijk is.
            </p>
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={site.signupUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCalendar width={18} height={18} />
                Plan een kennismaking
              </a>
              <a className="btn btn--outline" href={site.phoneHref}>
                <IconPhone width={18} height={18} />
                Bel direct
              </a>
            </div>
            <div className="hero__points">
              <span className="img-badge">Gecertificeerd</span>
              <span className="img-badge">20+ jaar ervaring</span>
              <span className="img-badge">Moeder van 4</span>
            </div>
          </div>
          <div className="hero__media">
            <div className="img-frame img-frame--tall">
              <Image
                src="/images/pasgeboren-baby-blauwe-ogen-kraamzorg.webp"
                alt="Pasgeboren baby met blauwe ogen in een zachte doek, kraamzorg in Almere"
                width={600}
                height={900}
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kraamzorg op maat */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Premium kraamzorg op maat in Almere</span>
            <h2>Complete kraamzorg die meegroeit met jouw gezin</h2>
            <p className="lead">
              Flexibele zorgoplossingen van 24 tot 80 uur, perfect afgestemd op
              jouw unieke situatie in Almere.
            </p>
          </div>
          <div className="statement" style={{ marginBottom: "var(--sp-7)" }}>
            <h3>Zorg die aansluit bij jullie ritme</h3>
            <p>
              Elk gezin is anders. Daarom kijken we samen naar wat jullie
              nodig hebben: rust voor moeder, structuur voor de baby en ruimte
              voor het hele gezin om te landen in de nieuwe situatie.
            </p>
            <ul className="check-list">
              <li><IconCheck /><span>Persoonlijk zorgplan na het intakegesprek</span></li>
              <li><IconCheck /><span>Flexibel in uren, van 24 tot 80 uur kraamzorg</span></li>
              <li><IconCheck /><span>Afstemming met jouw verloskundige</span></li>
              <li><IconCheck /><span>Warme aandacht voor moeder, baby én gezin</span></li>
            </ul>
          </div>
          <div className="grid-3">
            <article className="card">
              <div className="card__icon"><IconCheck /></div>
              <h3>Kraamzorg op maat</h3>
              <p>
                Tijdens een vrijblijvend intakegesprek bepalen we samen hoeveel
                uur kraamzorg (tussen 24 en 80 uur) het beste past bij uw
                situatie. Wij werken volgens het Landelijk Indicatieprotocol
                Kraamzorg voor wetenschappelijk onderbouwde zorg.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                <strong style={{ color: "var(--primary)" }}>24–80 uur zorg</strong>
              </p>
            </article>
            <article className="card">
              <div className="card__icon"><IconCheck /></div>
              <h3>Flexibele zorgduur</h3>
              <p>
                Standaard bieden we 8 tot 10 dagen zorg, maar we passen ons
                direct aan aan uw behoeften. Indien nodig passen we de zorguren
                aan, altijd in overleg met u en uw verloskundige.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                <strong style={{ color: "var(--primary)" }}>8–10 dagen basis</strong>
              </p>
            </article>
            <article className="card">
              <div className="card__icon"><IconCheck /></div>
              <h3>Deskundige herindicatie</h3>
              <p>
                Verandert uw situatie tijdens de bevalling of kraamweek? Dan
                stellen we direct de zorguren bij. Onze kernwaarden blijven
                overeind: professionele zorg met persoonlijke aandacht.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                <strong style={{ color: "var(--primary)" }}>Tijdige aanpassingen</strong>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Zorg op maat — cultuur, taal & gewoonten */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Zorg op maat</span>
            <h2>Ruimte voor jouw gewoonten, taal en wensen</h2>
            <p className="lead">
              Elk gezin heeft eigen tradities, voorkeuren en verwachtingen
              rondom de kraamtijd. Bij kraamzorg &apos;T Gouden Hartje stem ik de zorg af
              op wat voor jullie belangrijk is zonder oordeel, met aandacht.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <div className="card__icon">
                <IconHeart />
              </div>
              <h3>Respect voor jouw gewoonten</h3>
              <p>
                Ruimte voor rituelen, voedingswensen, hygiëne en
                familietradities. Ik luister eerst, en pas de zorg daarop aan.
              </p>
            </article>
            <article className="card">
              <div className="card__icon">
                <IconCheck />
              </div>
              <h3>Meerdere talen</h3>
              <p>
                Begeleiding in het Nederlands, Engels, Arabisch of Berbers
                zodat je je in een kwetsbare periode echt begrepen
                voelt.
              </p>
            </article>
            <article className="card">
              <div className="card__icon">
                <IconShield />
              </div>
              <h3>Persoonlijke afstemming</h3>
              <p>
                In het intakegesprek bespreken we wensen rondom privacy,
                voeding, bezoek en gewoonten. Jij bepaalt, ik ondersteun.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Mijn persoonlijke kraamzorgproces in Almere</span>
            <h2>Een zorgzaam proces, stap voor stap</h2>
            <p className="lead">
              Van eerste contact tot blijvende nazorg: mijn persoonlijke aanpak
              voor uw gemoedsrust in Almere.
            </p>
          </div>
          <ol className="steps">
            {stappen.map((stap) => (
              <li key={stap.title}>
                <h3>{stap.title}</h3>
                <p>{stap.text}</p>
                <ul className="check-list" style={{ marginTop: "1rem" }}>
                  {stap.points.map((p) => (
                    <li key={p}>
                      <IconCheck />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: "50rem" }}>
          <div className="section-head">
            <span className="eyebrow">Veelgestelde vragen</span>
            <h2>Antwoorden op jouw vragen over kraamzorg</h2>
          </div>
          <dl className="faq-list">
            {kraamzorgFaqs.map((f) => (
              <div key={f.q} className="faq-item">
                <dt><h3>{f.q}</h3></dt>
                <dd><p>{f.a}</p></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Zeker weten van de beste start?</h2>
            <p>
              Vraag vandaag nog uw vrijblijvende kraamzorg-intake aan in Almere.
              Geen verrassingen, alleen warmte en expertise afgestemd op uw
              gezin.
            </p>
            <div className="hero__actions">
              <a
                className="btn btn--gold"
                href={site.signupUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCalendar width={18} height={18} />
                Plan een kennismaking
              </a>
              <Link className="btn btn--ghost-light" href="/contact">
                Stel een vraag
              </Link>
            </div>
            <div className="cta-band__meta">
              <span>Reactie binnen 24 uur</span>
              <span>Vrijblijvend intakegesprek</span>
              <span>Almere en omgeving</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
