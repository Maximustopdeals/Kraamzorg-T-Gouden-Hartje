import Link from "next/link";
import Image from "next/image";
import { navItems, site } from "@/lib/site";
import {
  IconClock,
  IconFacebook,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconSnapchat,
} from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Blok 1 — Brand */}
        <div className="footer__brand">
          <Image
            src="/images/logo-kraamzorg-t-gouden-hartje.webp"
            alt={`Logo ${site.name}`}
            width={84}
            height={84}
          />

          <p className="footer__tagline">
            Persoonlijke kraamzorg met warmte, rust en aandacht — voor het
            hele gezin.
          </p>

          <div className="footer__meta">
            <span>KvK: {site.kvk}</span>
            <span>KCKZ: {site.kckz}</span>
          </div>

          <div className="footer__socials" aria-label="Social media">
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <IconFacebook />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconInstagram />
            </a>
            <a
              href={site.socials.snapchat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Snapchat"
            >
              <IconSnapchat />
            </a>
          </div>
        </div>

        {/* Blok 2 — Pagina's */}
        <nav aria-label="Footernavigatie">
          <h3>Pagina&apos;s</h3>
          <ul className="footer__list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/kraamzorg">Kraamzorg</Link>
            </li>
            <li>
              <Link href="/over-mij">Over mij</Link>
            </li>
            <li>
              <Link href="/recensies">Recensies</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacyverklaring">Privacyverklaring</Link>
            </li>
          </ul>
        </nav>

        {/* Blok 3 — Aangesloten bij */}
        <div>
          <h3>Aangesloten bij</h3>
          <ul className="footer__list">
            <li>KCKZ</li>
            <li>Kraammarkt</li>
            <li>KIWA</li>
            <li>Erkend Leerbedrijf</li>
          </ul>

          <div className="footer__badges">
            <Image
              src="/images/sbb-erkend-leerbedrijf.webp"
              alt="SBB Erkend leerbedrijf"
              width={64}
              height={43}
            />
          </div>
        </div>

        {/* Blok 4 — Contact & bezoek */}
        <div>
          <h3>Contact &amp; bezoek</h3>
          <ul className="footer__contact">
            <li>
              <IconPin aria-hidden="true" />
              <span>
                {site.address.street}, {site.address.city}
              </span>
            </li>
            <li>
              <IconPhone aria-hidden="true" />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <IconMail aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>

          <h3 className="footer__hours-title">Openingstijden</h3>
          <p className="footer__hours">
            <IconClock
              width={20}
              height={20}
              aria-hidden="true"
              style={{
                flex: "none",
                marginTop: 3,
                color: "var(--color-rose-400)",
              }}
            />
            <span>{site.hours}</span>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="container footer__bottom">
        <div className="footer__bottom-left">
          <span>
            © {year} {site.name}. Alle rechten voorbehouden.
          </span>
          <span>
            Kraamzorg in Almere, Bussum, Huizen, Utrecht, Amsterdam en
            Amersfoort
          </span>
        </div>
        <div className="footer__bottom-right">
          <span>
            Webdesign door{" "}
            <a
              href="https://www.webboostpartner.nl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Webboostpartner
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
