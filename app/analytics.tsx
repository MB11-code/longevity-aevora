"use client";

import { useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
const GOOGLE_ADS_ID = "AW-18022149233";

/* ── helpers ── */

function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("oravivum-cookies") === "all";
}

/** Fire a generate_lead conversion for both Google Ads and GA4. */
export function trackGenerateLead() {
  if (typeof window === "undefined") return;
  // Google Ads conversion
  if (window.gtag) {
    window.gtag("event", "generate_lead", {
      send_to: GOOGLE_ADS_ID,
      value: 1.0,
      currency: "EUR",
    });
    // GA4 generate_lead
    window.gtag("event", "generate_lead");
  }
  // Also push to dataLayer for GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "generate_lead" });
}

/** Push a gtag event (safe no-op when gtag isn't loaded yet).
 *  Also pushes to dataLayer so GTM can pick up the event. */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  // Push to dataLayer for GTM (works even if GA4 isn't loaded via gtag)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  // Also fire via gtag if loaded (direct GA4)
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
}

/* ── click-to-call tracking ── */

function handleTelClick(e: MouseEvent) {
  const anchor = (e.target as HTMLElement).closest?.("a[href^='tel:']") as HTMLAnchorElement | null;
  if (!anchor) return;
  trackEvent("click_to_call", {
    phone_number: anchor.href.replace("tel:", ""),
  });
  // Google Ads click-to-call conversion
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18022149233/AeqPCLz0r4ocEPHY0JFD",
      value: 1.0,
      currency: "EUR",
    });
  }
}

/* ── component ── */

export function Analytics() {
  const pathname = usePathname();
  const loaded = useRef(false);

  // Dynamically inject the GA4 scripts
  const injectGA = useCallback(() => {
    if (!GA_ID || loaded.current) return;
    if (document.getElementById("ga4-gtag")) return;

    // gtag.js loader
    const script = document.createElement("script");
    script.id = "ga4-gtag";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // inline init
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window.dataLayer as any[]).push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: true, anonymize_ip: true });
    window.gtag("config", GOOGLE_ADS_ID);

    loaded.current = true;
  }, []);

  // Always load GA4 — analytical cookies with IP anonymization are permitted
  // under AVG/GDPR without explicit consent (Autoriteit Persoonsgegevens guideline).
  useEffect(() => {
    injectGA();
  }, [injectGA]);

  // Track client-side navigations
  useEffect(() => {
    if (!loaded.current || !GA_ID) return;
    window.gtag?.("config", GA_ID, { page_path: pathname });
  }, [pathname]);

  // Click-to-call delegation
  useEffect(() => {
    document.addEventListener("click", handleTelClick);
    return () => document.removeEventListener("click", handleTelClick);
  }, []);

  // No visible output; scripts are injected dynamically after consent
  return null;
}
