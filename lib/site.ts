export const site = {
  name: "Tirta Agung Teknik",
  url: "https://tirtaagungteknik.com",
  telephone: "+62818970473",
};

export const business = {
  serviceArea: [
    // BUTUH KONFIRMASI: campaign targeting and geography alone do not confirm coverage.
    { name: "Jakarta Selatan", neighborhoods: ["Jagakarsa", "Ciganjur"], confirmed: false },
    { name: "Cinere", neighborhoods: [], confirmed: false },
    { name: "Cirendeu", neighborhoods: [], confirmed: true },
  ],
};

const confirmedServiceAreas = business.serviceArea.filter(({ confirmed }) => confirmed);

export const serviceAreaText = new Intl.ListFormat("id", { style: "long", type: "conjunction" })
  .format(confirmedServiceAreas.map(({ name }) => name));

export const homepageSeo = {
  title: `Service Pompa Air & Bor Sumur${serviceAreaText ? ` ${serviceAreaText}` : ""} | ${site.name}`,
  description: `Service pompa atau mesin air${serviceAreaText ? ` di ${serviceAreaText}` : ""}, termasuk Sanyo dan Shimizu. Diagnosis dulu; estimasi dijelaskan sebelum pengerjaan.`,
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
  areaServed: confirmedServiceAreas
    .flatMap(({ name, neighborhoods }) => [name, ...neighborhoods])
    .map((name) => ({ "@type": "Place", name })),
};
