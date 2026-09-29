import type { Metadata } from "next";
import ElfsightReviews from "@/components/ElfsightReviews";
import { site } from "@/lib/site";
import { IconStar } from "@/components/icons";

export const metadata: Metadata = {
  title: "Recensies | Ervaringen van gezinnen in Almere",
  description:
    "Lees de ervaringen van gezinnen met de kraamzorg van 'T Gouden Hartje in Almere. Echte Google-recensies van ouders die je voorgingen.",
  alternates: { canonical: "/recensies" },
};

export default function RecensiesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">
              <IconStar width={14} height={14} style={{ display: "inline", verticalAlign: "-2px" }} /> Google-recensies
            </span>
            <h1>Ervaringen van gezinnen in Almere</h1>
            <p className="lead">
              Benieuwd hoe andere ouders de kraamweek met &apos;T Gouden Hartje
              hebben ervaren? Hieronder lees je hun Google-recensies.
            </p>
          </div>
          <ElfsightReviews />
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="cta-band">
            <h2>Deel je ervaring met mijn kraamzorg</h2>
            <p>
              Heb je genoten van mijn kraamzorgdiensten? Deel je ervaring en
              help anderen bij het maken van een keuze. Jouw feedback is
              waardevol voor mijn bedrijf.
            </p>
            <div className="hero__actions">
              <a className="btn btn--gold" href={site.signupUrl} target="_blank" rel="noopener noreferrer">
                Inschrijven voor kraamzorg
              </a>
              <a className="btn btn--ghost-light" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                Stuur een bericht
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
