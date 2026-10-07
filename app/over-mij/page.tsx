import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/schema";
import { IconCheck, IconHeart } from "@/components/icons";

export const metadata: Metadata = {
  title: "Hanan El Morabit | Kraamzorg in Almere met Hart & Ziel",
  description:
    "Hanan El Morabit: uw vertrouwde kraamverzorgende in Almere. Warme, professionele zorg met 20+ jaar ervaring. Ontdek mijn aanpak.",
  alternates: { canonical: "/over-mij" },
};

const waarom = [
  {
    title: "Persoonlijke zorg",
    text: "Persoonlijke aandacht voor moeder én kind, met ondersteuning die verder gaat dan de basiszorg. Ik kijk naar úw verhaal, úw behoeften en úw gezinssituatie.",
  },
  {
    title: "Ervaren & betrokken",
    text: "Met 25+ jaar ervaring in de kraamzorg en als moeder van vier weet ik wat er écht toe doet. Deskundig, liefdevol en altijd met een luisterend oor.",
  },
  {
    title: "Kraamzorg op maat",
    text: "Elke situatie is uniek. Ik stem mijn zorg volledig af op jouw gezin, wensen en ritme. Van 24 tot 80 uur, precies wat ú nodig heeft.",
  },
];

export default function OverMijPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Over mij", url: "/over-mij" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">Persoonlijke kraamzorg in Almere</span>
            <h1>Toegewijde kraamverzorgende met meer dan 20 jaar ervaring</h1>
            <div className="hero__points">
              <span className="img-badge">20+ jaar kraamzorg-ervaring</span>
              <span className="img-badge">Moeder van 4</span>
              <span className="img-badge">Almeerse zorg</span>
            </div>
            <p className="lead" style={{ marginTop: "1.5rem" }}>
              Ik ben Hanan El Morabit, ervaren kraamverzorgende bij 'T Gouden Hartje. Met meer dan 20 jaar ervaring in de kraamzorg ondersteun ik gezinnen tijdens de eerste dagen na de bevalling met persoonlijke, betrokken begeleiding en deskundige zorg.
            </p>
            <p>
              Mijn aanpak combineert professionele deskundigheid met oprechte,
              moederlijke zorg voor moeder, kind en het hele gezin.
            </p>
            <blockquote className="quote">
              &ldquo;Ieder gezin verdient een eigen aanpak. Mijn doel is dat u
              zich gezien, veilig en volledig gesteund voelt in uw kraamtijd.
              Samen maken we er een onvergetelijke start van.&rdquo;
            </blockquote>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/contact">
                Maak kennis
              </Link>
              <Link className="btn btn--outline" href="/kraamzorg-almere">
                Mijn aanpak
              </Link>
            </div>
          </div>
          <div className="hero__media">
            <div className="img-frame">
              <Image
                src="/images/kraamzorg-t-gouden-hartje-over-mij-header.webp"
                alt="Hanan El Morabit, ervaren kraamverzorgende in Almere met pasgeboren baby"
                width={1152}
                height={766}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <span className="hero__badge">
              <IconHeart
                width={16}
                height={16}
                style={{ display: "inline", verticalAlign: "-3px", color: "var(--primary)" }}
              />{" "}
              Warme, veilige start voor <strong>ieder gezin</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Waarom */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Uw premium keuze in Almere</span>
            <h2>Waarom gezinnen in Almere vertrouwen op &apos;T Gouden Hartje</h2>
            <p className="lead">
              Niet zomaar kraamzorg, maar een warme, professionele start voor
              uw gezin.
            </p>
          </div>

          <div className="grid-2" style={{ alignItems: "center", gap: "var(--sp-8)" }}>
            <div
              className="img-frame"
              style={{ maxWidth: "380px", margin: "0 auto", aspectRatio: "3 / 4" }}
            >
              <Image
                src="/images/kraamverzorgende-hanan-over-mij.webp"
                alt="Hanan El Morabit, kraamverzorgende bij 'T Gouden Hartje, wiegt liefdevol een pasgeboren baby"
                width={600}
                height={800}
                sizes="(max-width: 768px) 80vw, 380px"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div style={{ display: "grid", gap: "var(--sp-5)" }}>
              {waarom.map((item) => (
                <article className="card" key={item.title}>
                  <div className="card__icon">
                    <IconCheck />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Klaar voor een zorgeloze kraamtijd?</h2>
            <p>
              Zoek je betrokken en deskundige kraamzorg in Almere? Plan vandaag
              nog een vrijblijvend kennismakingsgesprek.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--gold" href="/contact">
                Maak kennis met Hanan
              </Link>
            </div>
            <div className="cta-band__meta">
              <span>Vrijblijvend</span>
              <span>Geen wachtlijst</span>
              <span>Binnen 24 uur reactie</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
