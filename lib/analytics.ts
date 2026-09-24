export type ContactMethod = "whatsapp" | "phone";
export type ContactPlacement = "navbar" | "hero" | "cta" | "floating";

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

const contactEvents: Record<ContactMethod, string> = {
  whatsapp: "ads_conversion_WhatsApp_Navbar",
  phone: "ads_conversion_Phone_Click",
};

const whatsappAdsConversion = "AW-344369850/S-HaCMHXoYEdELrVmqQB";

function getGoogleTag() {
  if (typeof window === "undefined") {
    return null;
  }

  window.dataLayer ??= [];
  window.gtag ??= (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  return window.gtag;
}

export function trackContactClick(
  method: ContactMethod,
  placement: ContactPlacement,
) {
  const gtag = getGoogleTag();

  if (!gtag) {
    return;
  }

  gtag("event", contactEvents[method], {
    event_category: "lead",
    contact_method: method,
    link_placement: placement,
  });

  if (method === "whatsapp") {
    gtag("event", "conversion", {
      send_to: whatsappAdsConversion,
      event_category: "lead",
      contact_method: method,
      link_placement: placement,
    });
  }
}
