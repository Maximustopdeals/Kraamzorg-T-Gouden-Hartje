import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false as const,
  ...props,
});

export const IconPhone = (p: P) => (
  <svg {...base(p)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.22a2 2 0 0 1 2.11-.45c.85.31 1.73.53 2.63.65A2 2 0 0 1 22 16.92z"/></svg>
);

export const IconMail = (p: P) => (
  <svg {...base(p)}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
);

export const IconPin = (p: P) => (
  <svg {...base(p)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export const IconClock = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}><path d="M20 6 9 17l-5-5"/></svg>
);

export const IconHeart = (p: P) => (
  <svg {...base(p)}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

export const IconArrowUp = (p: P) => (
  <svg {...base(p)}><path d="m18 15-6-6-6 6"/></svg>
);

export const IconMenu = (p: P) => (
  <svg {...base(p)}><path d="M4 6h16M4 12h16M4 18h16"/></svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}><path d="M18 6 6 18M6 6l12 12"/></svg>
);

export const IconCalendar = (p: P) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
);

export const IconShield = (p: P) => (
  <svg {...base(p)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

export const IconStar = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...p}><path d="M12 2l2.9 6.26 6.6.56-5 4.36 1.5 6.45L12 16.9 5.99 19.63l1.5-6.45-5-4.36 6.6-.56L12 2z"/></svg>
);

export const IconFacebook = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...p}><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.2v3h2.5v7h2.8z"/></svg>
);

export const IconInstagram = (p: P) => (
  <svg {...base(p)}><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" stroke="none"/></svg>
);

export const IconSnapchat = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...p}><path d="M12 2.5c3 0 5.2 2.3 5.2 5.6v2c.4.2.8.2 1.3.1.5-.1 1.2.1 1.2.7 0 .4-.3.7-1 1-.5.2-1.2.5-1.4 1 0 .3.2.7.6 1.2.7 1 1.8 2 3.2 2.3.3 0 .5.3.4.6-.1.6-1.2 1-2.4 1.2-.1.4-.2 1-.4 1.2-.1.2-.4.2-.7.2-.5 0-1.2-.2-2-.2-.5 0-.9.2-1.4.6-.6.5-1.4 1.2-2.6 1.2s-2-.7-2.6-1.2c-.5-.4-.9-.6-1.4-.6-.8 0-1.5.2-2 .2-.3 0-.6-.1-.7-.2-.2-.2-.3-.8-.4-1.2-1.2-.2-2.3-.6-2.4-1.2-.1-.3.1-.6.4-.6 1.4-.3 2.5-1.3 3.2-2.3.4-.5.6-.9.6-1.2-.2-.5-.9-.8-1.4-1-.7-.3-1-.6-1-1 0-.6.7-.8 1.2-.7.5.1.9.1 1.3-.1v-2c0-3.3 2.2-5.6 5.2-5.6z"/></svg>
);

export const IconWhatsapp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...p}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.3 3.4c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.4.2-.7.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.4z"/></svg>
);
