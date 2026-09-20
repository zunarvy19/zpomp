export type ContactMethod = "whatsapp" | "phone";
export type ContactPlacement = "navbar" | "hero" | "cta" | "floating";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const contactEvents: Record<ContactMethod, string> = {
  // Keep the existing WhatsApp event name so the current Google Ads setup
  // continues receiving the event from every WhatsApp button.
  whatsapp: "ads_conversion_WhatsApp_Navbar",
  phone: "ads_conversion_Phone_Click",
};

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
}
