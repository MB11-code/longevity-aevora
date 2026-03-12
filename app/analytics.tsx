"use client";

import { useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

/* ── helpers ── */

function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("oravivum-cookies") === "all";
}

/** Push a gtag event (safe no-op when gtag isn't loaded yet). */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
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
    window.gtag("config", GA_ID, { send_page_view: true });

    loaded.current = true;
  }, []);

  // On mount: load if consent already given, otherwise listen for storage changes
  useEffect(() => {
    if (hasConsent()) {
      injectGA();
    }

    // Listen for consent changes (cookie banner sets localStorage then dispatches event)
    function onStorage(e: StorageEvent) {
      if (e.key === "oravivum-cookies" && e.newValue === "all") {
        injectGA();
      }
    }

    // Custom event for same-tab consent (StorageEvent only fires cross-tab)
    function onConsent() {
      if (hasConsent()) injectGA();
    }

    window.addEventListener("storage", onStorage);
    window.addEventListener("oravivum-consent", onConsent);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("oravivum-consent", onConsent);
    };
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
