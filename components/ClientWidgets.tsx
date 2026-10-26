"use client";

import { useState, useEffect } from "react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import StickyCta from "@/components/StickyCta";
import CookieConsent from "@/components/CookieConsent";
import FooterVisibility from "@/components/FooterVisibility";

export default function ClientWidgets() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wacht 2.5 seconden voordat we de zware client-componenten inladen
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <StickyCta />
      <WhatsAppFloat />
      <BackToTop />
      <CookieConsent />
      <FooterVisibility />
    </>
  );
}
