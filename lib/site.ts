export const site = {
  name: "Tirta Agung Teknik",
  url: "https://tirtaagungteknik.com",
  telephone: "+62818970473",
  areas: ["Depok", "Sawangan", "Bojongsari", "Pancoran Mas", "Beji", "Limo", "Cinere"],
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${site.url}/`).toString();
}

// Only publish business details already present in the site's service content.
// Add a street address or opening hours only after the business confirms them.
export const businessSchema = {
  "@type": "Plumber",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: absoluteUrl(),
  telephone: site.telephone,
  logo: absoluteUrl("/images/tat-logo.png"),
  image: absoluteUrl("/images/servis-pompa-jetpump-1280.webp"),
  description: "Jasa service pompa air, bor sumur, dan instalasi pompa serta pipa di Depok dan sekitarnya.",
  areaServed: site.areas.map((name) => ({ "@type": "Place", name })),
};
