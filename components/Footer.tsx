import Link from "next/link";
import Image from "next/image";
import { navItems, site } from "@/lib/site";
import { IconClock, IconFacebook, IconInstagram, IconMail, IconPhone, IconPin, IconSnapchat } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/images/logo-kraamzorg-t-gouden-hartje.webp" alt={`Logo ${site.name}`} width={84} height={84} />
          <p>
            Persoonlijke kraamzorg met warmte, aandacht en rust, voor moeder,
            baby en het hele gezin in Almere en omgeving.
          </p>
          <div className="footer__meta">
            <span>KvK: {site.kvk}</span>
            <span>KCKZ: {site.kckz}</span>
          </div>
          <div className="footer__socials" aria-label="Social media">
            <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href={site.socials.snapchat} target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
              <IconSnapchat />
            </a>
          </div>
        </div>

        <nav aria-label="Footernavigatie">
          <h3>Aangesloten bij</h3>
          <ul className="footer__list">
            <li>KCKZ</li>
            <li>Kraammarkt</li>
            <li>KIWA</li>
          </ul>
          <div className="footer__badges">
            <span className="badge-pill">Erkend Leerbedrijf</span>
            <Image src="/images/sbb-erkend-leerbedrijf.webp" alt="SBB Erkend leerbedrijf" width={64} height={43} />
          </div>
          <h3 style={{ marginTop: "2rem" }}>Pagina&apos;s</h3>
          <ul className="footer__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacyverklaring">Privacyverklaring</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3>Contact &amp; bezoek</h3>
          <ul className="footer__contact">
            <li>
              <IconPin />
              <span>
                {site.address.street}, {site.address.city}
              </span>
            </li>
            <li>
              <IconPhone />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <IconMail />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
          <h3>Openingstijden</h3>
          <p style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
            <IconClock width={20} height={20} style={{ flex: "none", marginTop: 3, color: "var(--color-rose-400)" }} />
            <span>{site.hours}</span>
          </p>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {site.name}. Alle rechten voorbehouden.
        </span>
        <span>
          Kraamzorg in Almere, Bussum, Huizen, Utrecht, Amsterdam en Amersfoort
        </span>
      </div>
    </footer>
  );
}
