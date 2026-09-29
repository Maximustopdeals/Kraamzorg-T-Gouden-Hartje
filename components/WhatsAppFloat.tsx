"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { IconClose, IconWhatsapp } from "./icons";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div
        className="wa-panel"
        role="dialog"
        aria-label="WhatsApp chatvenster"
        data-open={open || undefined}
        aria-hidden={!open}
      >
        <div className="wa-panel__header">
          <span className="wa-panel__avatar">
            <IconWhatsapp width={24} height={24} />
          </span>
          <span className="wa-panel__title">
            <strong>Kraamzorg &apos;T Gouden Hartje</strong>
            <span className="wa-panel__status">
              <span className="wa-panel__dot" aria-hidden />
              Online
            </span>
          </span>
          <button
            type="button"
            className="wa-panel__close"
            onClick={() => setOpen(false)}
            aria-label="Chatvenster sluiten"
          >
            <IconClose width={18} height={18} />
          </button>
        </div>
        <div className="wa-panel__body">
          <p className="wa-panel__message">
            Hallo! Hoe kan ik u helpen met persoonlijke kraamzorg?
          </p>
          <a
            className="wa-panel__cta"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsapp width={20} height={20} />
            Start chat
          </a>
        </div>
      </div>

      <button
        type="button"
        className="fab-whatsapp"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "WhatsApp-chatvenster sluiten" : "Open WhatsApp-chat"}
      >
        {open ? <IconClose width={22} height={22} /> : <IconWhatsapp />}
      </button>
    </>
  );
}
