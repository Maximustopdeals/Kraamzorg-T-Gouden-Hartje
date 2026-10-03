"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Consent = {
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "tgh-consent-v1";

function updateGtagConsent(consent: Consent) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  const gtag =
    w.gtag ||
    function (...args: unknown[]) {
      w.dataLayer!.push(args);
    };
  w.gtag = gtag;

  gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  });
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setOpen(true);
        return;
      }
      const parsed = JSON.parse(stored) as Consent;
      updateGtagConsent(parsed);
    } catch {
      setOpen(true);
    }
  }, []);

  function persist(consent: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      /* ignore */
    }
    updateGtagConsent(consent);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="cookie-consent"
      role="dialog"
      aria-modal="false"
      aria-label="Cookievoorkeuren"
    >
      <div className="cookie-consent__inner">
        <div className="cookie-consent__text">
          <strong>Wij gebruiken cookies</strong>
          <p>
            We gebruiken noodzakelijke cookies om de website te laten werken en
            — met jouw toestemming — analytische cookies om de site te
            verbeteren. Lees meer in onze{" "}
            <Link href="/privacyverklaring">privacyverklaring</Link>.
          </p>

          {showDetails && (
            <div className="cookie-consent__details">
              <label>
                <input type="checkbox" checked disabled />
                <span>
                  <strong>Noodzakelijk</strong> — altijd actief
                </span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span>
                  <strong>Analytisch</strong> — Google Analytics 4 via GTM
                </span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                <span>
                  <strong>Marketing</strong> — advertenties en social pixels
                </span>
              </label>
            </div>
          )}
        </div>

        <div className="cookie-consent__actions">
          {!showDetails && (
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setShowDetails(true)}
            >
              Voorkeuren
            </button>
          )}
          <button
            type="button"
            className="btn btn--outline"
            onClick={() => persist({ analytics: false, marketing: false })}
          >
            Alleen noodzakelijk
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => persist({ analytics, marketing })}
          >
            Accepteer
          </button>
        </div>
      </div>
    </div>
  );
}
