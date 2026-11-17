export const site = {
  name: "Tirta Agung Teknik",
  url: "https://tirtaagungteknik.com",
  telephone: "+62818970473",
};

export const business = {
  serviceArea: [
    { name: "Jakarta Selatan", shortName: "Jaksel", neighborhoods: ["Jagakarsa", "Ciganjur"] },
    { name: "Cinere", shortName: "Cinere", neighborhoods: [] },
    { name: "Cirendeu", shortName: "Cirendeu", neighborhoods: [] },
  ],
};

const serviceAreaText = new Intl.ListFormat("id", { style: "long", type: "conjunction" })
  .format(business.serviceArea.map(({ name }) => name));

export const homepageSeo = {
  // Keep the title compact; the description and schema include every service area.
  title: `Service Pompa Air & Bor Sumur ${business.serviceArea.slice(0, 2).map(({ shortName }) => shortName).join(" & ")} | ${site.name}`,
  description: `Service pompa air, bor sumur, dan instalasi pipa di ${serviceAreaText}. Diagnosis dulu, estimasi dijelaskan sebelum pengerjaan.`,
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${site.url}/`).toString();
}

// Only publish business details confirmed by the business.
// Add a street address or opening hours only after the business confirms them.
export const businessSchema = {
  "@type": "Plumber",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: absoluteUrl(),
  telephone: site.telephone,
  logo: absoluteUrl("/images/tat-logo.png"),
  image: absoluteUrl("/images/servis-pompa-jetpump-1280.webp"),
  description: homepageSeo.description,
  areaServed: business.serviceArea
    .flatMap(({ name, neighborhoods }) => [name, ...neighborhoods])
    .map((name) => ({ "@type": "Place", name })),
};
