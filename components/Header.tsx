"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/lib/site";
import { IconClose, IconFacebook, IconInstagram, IconMenu, IconSnapchat, IconWhatsapp } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__socials" aria-label="Social media">
            <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href={site.socials.snapchat} target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
              <IconSnapchat />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <IconWhatsapp />
            </a>
          </div>
          <span className="topbar__brand">Kraamzorg &apos;T Gouden Hartje, Almere</span>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Link href="/" className="header__logo" aria-label={`${site.name}, naar de homepage`}>
            <Image src="/images/logo-kraamzorg-t-gouden-hartje.webp" alt="" width={48} height={48} priority />
            <span>
              &apos;T Gouden Hartje
              <small>Kraamzorg in Almere</small>
            </span>
          </Link>

          <nav className="nav" aria-label="Hoofdnavigatie">
            <ul className="nav__list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a className="btn btn--primary nav__cta" href={site.signupUrl} target="_blank" rel="noopener noreferrer">
            Inschrijven
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        <nav id="mobiel-menu" className="mobile-nav" data-open={open} aria-label="Mobiele navigatie">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary" href={site.signupUrl} target="_blank" rel="noopener noreferrer">
            Inschrijven voor kraamzorg
          </a>
        </nav>
      </header>
    </>
  );
}
