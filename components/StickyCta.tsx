import Link from "next/link";
import { site } from "@/lib/site";
import { IconPhone } from "./icons";

export default function StickyCta() {
  return (
    <div className="sticky-cta" role="region" aria-label="Snelle acties">
      <a className="btn btn--outline" href={site.phoneHref}>
        <IconPhone width={18} height={18} />
        Bel direct
      </a>
      <Link className="btn btn--primary" href="/contact">
        Aanmelden
      </Link>
    </div>
  );
}
