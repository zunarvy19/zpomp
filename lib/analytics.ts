export type ContactMethod = "whatsapp" | "phone";
export type ContactPlacement = "navbar" | "hero" | "cta" | "floating";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const contactEvents: Record<ContactMethod, string> = {
  whatsapp: "ads_conversion_WhatsApp_Navbar",
  phone: "ads_conversion_Phone_Click",
};

const whatsappAdsConversion = "AW-344369850/S-HaCMHXoYEdELrVmqQB";

export function trackContactClick(
  method: ContactMethod,
  placement: ContactPlacement,
) {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", contactEvents[method], {
    event_category: "lead",
    contact_method: method,
    link_placement: placement,
  });

  if (method === "whatsapp") {
    window.gtag("event", "conversion", {
      send_to: whatsappAdsConversion,
      event_category: "lead",
      contact_method: method,
      link_placement: placement,
    });
  }
}
