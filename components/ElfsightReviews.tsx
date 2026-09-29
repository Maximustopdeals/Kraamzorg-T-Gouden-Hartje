"use client";

import { useState } from "react";
import Script from "next/script";

/**
 * Elfsight Google Reviews-widget (aangeleverde embedcode).
 * Extern script wordt lazy geladen; een skeleton vult de ruimte tot de
 * widget klaar is, zodat de pagina niet verspringt (layout shift).
 */
export default function ElfsightReviews() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
        onLoad={() => setLoaded(true)}
      />
      <div className="elfsight-wrapper">
        <div className="elfsight-app-a552495e-d7c4-45f8-8699-cf0d16601718" />
        {!loaded && (
          <div className="elfsight-skeleton" aria-hidden="true">
            <div className="skeleton-header" />
            <div className="skeleton-review" />
            <div className="skeleton-review" />
            <div className="skeleton-review" />
          </div>
        )}
        <noscript>
          <p>
            Bekijk onze Google-recensies via{" "}
            <a
              href="https://www.google.com/search?q=Kraamzorg+%27T+Gouden+Hartje+Almere+reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </a>
            .
          </p>
        </noscript>
      </div>
    </>
  );
}
