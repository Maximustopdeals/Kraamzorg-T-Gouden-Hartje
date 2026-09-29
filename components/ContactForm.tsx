"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "err";

const talen = ["Nederlands", "Engels", "Arabisch", "Berbers", "Turks"];
const bevallingOpties = [
  "Thuisbevalling",
  "Ziekenhuis (poliklinisch)",
  "Ziekenhuis (klinisch)",
  "Geplande keizersnede",
  "Nog onbekend",
];
const gevondenOpties = [
  "Via Google",
  "Via Instagram",
  "Via Facebook",
  "Via mijn verloskundige",
  "Via familie of vrienden",
  "Anders",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <div className="form" role="status">
        <div className="form__status form__status--ok">
          Bedankt voor je aanvraag! Je ontvangt een bevestiging per e-mail. Ik
          neem binnen 24 uur persoonlijk contact met je op.
        </div>
        <p style={{ margin: 0 }}>
          Liever direct contact? Bel{" "}
          <a href={site.phoneHref}>{site.phone}</a> of stuur een{" "}
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp-bericht
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Contact- en aanmeldformulier">
      <div className="form__row">
        <div className="field">
          <label htmlFor="voornaam">Voornaam en meisjesnaam *</label>
          <input id="voornaam" name="voornaam" type="text" required autoComplete="given-name" />
          <span className="hint">Vul hier uw voornaam en meisjesnaam in</span>
        </div>
        <div className="field">
          <label htmlFor="partner">Naam partner *</label>
          <input id="partner" name="naam_partner" type="text" required />
          <span className="hint">Vul hier uw voor- en achternaam in</span>
        </div>
      </div>

      <div className="field">
        <label htmlFor="adres">Adres, postcode en woonplaats *</label>
        <input id="adres" name="adres" type="text" required autoComplete="street-address" />
        <span className="hint">Vul hier je adres, postcode en woonplaats in</span>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="email">E-mail *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
          <span className="hint">Vul hier uw e-mailadres in</span>
        </div>
        <div className="field">
          <label htmlFor="mobiel">Mobiel *</label>
          <input id="mobiel" name="mobiel" type="tel" required autoComplete="tel" />
          <span className="hint">Vul hier uw mobiele nummer in</span>
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="uitgerekend">Uitgerekende datum *</label>
          <input id="uitgerekend" name="uitgerekende_datum" type="date" required />
        </div>
        <div className="field">
          <label htmlFor="hoeveelste">Hoeveelste kind in uw gezin</label>
          <input id="hoeveelste" name="hoeveelste_kind" type="text" placeholder="Bijv. 1e kind, 2e kind, enz..." />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="bevalling">Bevalling *</label>
          <select id="bevalling" name="bevalling" required defaultValue="">
            <option value="" disabled>
              --- Selecteer keuze ---
            </option>
            {bevallingOpties.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="verloskundige">Verloskundigepraktijk (naam)</label>
          <input id="verloskundige" name="verloskundigepraktijk" type="text" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="verzekeraar">Zorgverzekeraar</label>
        <input id="verzekeraar" name="zorgverzekeraar" type="text" />
      </div>

      <fieldset className="fieldset">
        <legend>Welke talen spreekt u? *</legend>
        <div className="checks">
          {talen.map((taal) => (
            <label key={taal}>
              <input type="checkbox" name="talen" value={taal} />
              {taal}
            </label>
          ))}
        </div>
        <span className="hint">Vink de talen aan die u spreekt</span>
      </fieldset>

      <div className="field">
        <label htmlFor="gevonden">Hoe heb je mij gevonden? *</label>
        <select id="gevonden" name="hoe_gevonden" required defaultValue="">
          <option value="" disabled>
            --- Selecteer keuze ---
          </option>
          {gevondenOpties.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="info">Aanvullende informatie</label>
        <textarea id="info" name="aanvullende_informatie" />
      </div>

      {status === "err" && (
        <div className="form__status form__status--err" role="alert">
          Versturen is niet gelukt. Probeer het opnieuw, of neem direct contact
          op via <a href={site.phoneHref}>{site.phone}</a>.
        </div>
      )}

      <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Versturen…" : "Verstuur aanvraag"}
      </button>

      <p style={{ margin: 0, fontSize: "var(--fs-xs)", color: "var(--text-muted)" }}>
        Je gegevens worden alleen gebruikt om contact met je op te nemen over
        kraamzorg. Lees meer in de{" "}
        <a href="/privacyverklaring">privacyverklaring</a>.
      </p>
    </form>
  );
}
