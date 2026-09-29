/**
 * Centrale bedrijfsgegevens: één bron van waarheid.
 * Wijzigingen hier gelden automatisch voor header, footer,
 * structured data, contactpagina en formulieren.
 */
export const site = {
  name: "Kraamzorg 'T Gouden Hartje",
  shortName: "'T Gouden Hartje",
  domain: "kraamzorg-tgoudenhartje.nl",
  url: "https://kraamzorg-tgoudenhartje.nl",
  tagline: "Persoonlijke zorg voor moeder en kind",
  owner: "Hanan El Morabit",
  address: {
    street: "Merenguestraat 10",
    city: "Almere",
  },
  phone: "06-17060672",
  phoneHref: "tel:+31617060672",
  email: "info@kraamzorg-tgoudenhartje.nl",
  whatsapp:
    "https://wa.me/31617060672?text=Hallo,%20ik%20kom%20via%20jullie%20website%20en%20heb%20een%20vraag%20over%20kraamzorg.",
  hours: "maandag t/m vrijdag, 09:00 – 22:00 uur",
  kvk: "92065414",
  kckz: "217637",
  signupUrl: "https://kraamzorgtgoudenhartje.mijngeboortezorg.nl/Aanvragen/kraamzorg",
  formspreeEndpoint: "https://formspree.io/f/xbglqdjy",
  socials: {
    facebook: "https://www.facebook.com/kraamzorg.t.gouden.hartje/",
    instagram: "https://www.instagram.com/kraamzorg.tgoudenhartje/",
    snapchat: "https://www.snapchat.com/@oumsafae-imane?share_id=yMkMtTesGOY&locale=nl-NL",
  },
  analytics: {
    gtm: "GTM-NL3JXJLJ",
    ga4: "G-CCTHJ3Y6PT",
    googleVerification: "EmnJe4WkcxK7km4Wu-n-l6wASl1PJQcj1p8WJcD6H8I",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/kraamzorg-almere", label: "Kraamzorg" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/recensies", label: "Recensies" },
  { href: "/contact", label: "Contact" },
] as const;
