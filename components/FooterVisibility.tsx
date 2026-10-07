"use client";

import { useEffect } from "react";

/**
 * Zet `footer-visible` op <body> zodra de footer in beeld komt.
 * De zwevende knoppen (WhatsApp + back-to-top) gebruiken deze class
 * om hoger te gaan staan, zodat ze niet over de copyright-balk vallen.
 */
export default function FooterVisibility() {
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle("footer-visible", entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(footer);
    return () => {
      io.disconnect();
      document.body.classList.remove("footer-visible");
    };
  }, []);

  return null;
}
