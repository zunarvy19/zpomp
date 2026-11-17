import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../out/", import.meta.url));
const origin = "https://tirtaagungteknik.com";
const routes = ["/"];
const htmlFile = (route) => resolve(root, route === "/" ? "index.html" : `${route.slice(1)}.html`);
const pages = new Map(await Promise.all(routes.map(async (route) => [route, await readFile(htmlFile(route), "utf8")])));
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2].replaceAll("&amp;", "&")]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((m) => attrs(m[0]));
const homepageTitle = "Service Pompa Air & Bor Sumur Cirendeu | Tirta Agung Teknik";
const homepageDescription = "Service pompa atau mesin air di Cirendeu, termasuk Sanyo dan Shimizu. Diagnosis dulu; estimasi dijelaskan sebelum pengerjaan.";
const serviceAreas = ["Cirendeu"];
const unconfirmedAreas = ["Jakarta Selatan", "Jagakarsa", "Ciganjur", "Cinere"];
const legacyAreas = ["Depok", "Bogor", "Sawangan", "Bojongsari", "Pancoran Mas", "Beji", "Limo", "Bekasi", "Tangerang"];
const textContent = (html) => html
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]*>/g, " ")
  .replaceAll("&amp;", "&")
  .replace(/\s+/g, " ")
  .trim();

test("homepage metadata uses the official coverage and exact approved copy", () => {
  const html = pages.get("/");
  const meta = tags(html, "meta");
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  assert.equal(textContent(title || ""), homepageTitle);
  for (const [attribute, key, expected] of [
    ["name", "description", homepageDescription],
    ["property", "og:title", homepageTitle],
    ["property", "og:description", homepageDescription],
    ["name", "twitter:title", homepageTitle],
    ["name", "twitter:description", homepageDescription],
  ]) {
    const matches = meta.filter((tag) => tag[attribute] === key);
    assert.equal(matches.length, 1, key);
    assert.equal(matches[0].content, expected, key);
  }
  for (const area of [...legacyAreas, ...unconfirmedAreas, "Cireundeu"]) {
    assert.ok(!html.includes(area), `Unconfirmed or legacy area in homepage export: ${area}`);
  }
});

test("homepage shows only confirmed technician coverage and preserves the service heading", () => {
  const html = pages.get("/");
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  assert.equal(textContent(h1 || ""), "Service Pompa Air & Bor Sumur");
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1];
  assert.ok(body);
  const content = textContent(body);
  for (const area of [...unconfirmedAreas, "Jaksel", ...legacyAreas]) {
    assert.ok(!content.includes(area), `Unconfirmed location in visible content: ${area}`);
  }
  const hero = html.match(/<section\b[^>]*id="hero"[^>]*>([\s\S]*?)<\/section>/i)?.[1];
  const footer = html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/i)?.[1];
  for (const section of [hero, footer]) {
    assert.match(textContent(section || ""), /Area layanan: Cirendeu\./);
  }
});

test("service copy describes pump symptoms and confirmed brands without new pages or logos", () => {
  const html = pages.get("/");
  const hero = textContent(html.match(/<section\b[^>]*id="hero"[^>]*>([\s\S]*?)<\/section>/i)?.[1] || "");
  for (const symptom of ["mesin air", "tidak menyala", "air tidak naik", "tekanan lemah", "berisik"]) {
    assert.ok(hero.includes(symptom), symptom);
  }
  const services = html.match(/<section\b[^>]*id="layanan"[^>]*>([\s\S]*?)<\/section>/i)?.[1] || "";
  const headings = [...services.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)].map((match) => textContent(match[1]));
  assert.deepEqual(headings, ["Service Pompa Air", "Jasa Bor Sumur", "Instalasi Pompa & Pipa", "Solusi Sistem Air"]);
  const pumpCard = textContent(services.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1] || "");
  for (const term of ["mesin air", "jet pump", "Sanyo dan Shimizu", "pengecekan teknisi"]) {
    assert.ok(pumpCard.includes(term), term);
  }
  const faq = html.match(/<section\b[^>]*id="faq"[^>]*>([\s\S]*?)<\/section>/i)?.[1] || "";
  assert.equal(tags(faq, "details").length, 4);
  assert.ok(textContent(faq).includes("Apakah menerima service pompa air Sanyo dan Shimizu?"));
  assert.ok(textContent(faq).includes("bukan afiliasi resmi dengan produsen"));
  assert.ok(!tags(html, "img").some((image) => /sanyo|shimizu/i.test(`${image.src} ${image.alt}`)));
});

test("contact destinations and accessible WhatsApp labels are preserved", () => {
  const html = pages.get("/");
  const links = tags(html, "a");
  const whatsapp = links.filter((link) => link.href?.startsWith("https://wa.me/"));
  assert.equal(whatsapp.length, 8);
  for (const link of whatsapp) {
    assert.equal(new URL(link.href).pathname, "/62818970473");
    assert.equal(link.target, "_blank");
    assert.ok(link.rel.includes("noopener"));
  }
  const consultationUrl = "https://wa.me/62818970473?text=Halo%20Tirta%20Agung%20Teknik,%20saya%20ingin%20konsultasi%20tentang%20masalah%20air.";
  assert.equal(whatsapp.filter((link) => link.href === consultationUrl).length, 2);
  const telephone = links.filter((link) => link.href?.startsWith("tel:"));
  assert.equal(telephone.length, 2);
  assert.ok(telephone.every((link) => link.href === "tel:0818970473"));
  const nav = html.match(/<nav\b[^>]*>([\s\S]*?)<\/nav>/i)?.[1] || "";
  assert.equal(tags(nav, "a").find((link) => link.href?.startsWith("https://wa.me/"))?.["aria-label"], "Konsultasi via WhatsApp");
});

test("each page identifies the primary domain without legacy metadata", () => {
  for (const [route, html] of pages) {
    const canonical = tags(html, "link").filter((a) => a.rel === "canonical");
    assert.equal(canonical.length, 1, route);
    assert.equal(new URL(canonical[0].href).href, new URL(origin + route).href, route);
    const meta = tags(html, "meta");
    assert.equal(new URL(meta.find((a) => a.property === "og:url")?.content).href, new URL(origin + route).href);
    assert.ok(meta.find((a) => a.name === "description")?.content);
    assert.ok(!meta.some((a) => a.name === "robots" && /noindex/.test(a.content)));
    assert.equal((html.match(/<h1\b/g) || []).length, 1, route);
    assert.ok(!html.includes("zunaidipompa.zvy.my.id"), route);
  }
});

test("structured data points to one business on the primary domain", () => {
  for (const [route, html] of pages) {
    const data = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
    assert.ok(data.length, route);
    const business = data.flatMap((d) => d["@graph"] || []).find((d) => d["@type"] === "Plumber");
    assert.equal(business?.["@id"], `${origin}/#business`);
    assert.equal(business?.url, `${origin}/`);
    assert.equal(business?.description, homepageDescription);
    assert.deepEqual(business?.areaServed, serviceAreas.map((name) => ({ "@type": "Place", name })));
    for (const key of ["address", "geo", "openingHours", "openingHoursSpecification", "aggregateRating", "priceRange"]) {
      assert.ok(!(key in business), `Unverified business detail: ${key}`);
    }
    if (route !== "/") {
      const service = data.find((d) => d["@type"] === "Service");
      assert.equal(service?.url, origin + route);
      assert.equal(service?.provider["@id"], business["@id"]);
    }
  }
});

test("sitemap and robots expose only existing canonical pages", async () => {
  const sitemap = await readFile(resolve(root, "sitemap.xml"), "utf8");
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  assert.deepEqual(urls.sort(), routes.map((r) => origin + r).sort());
  const robots = await readFile(resolve(root, "robots.txt"), "utf8");
  assert.match(robots, /User-Agent: \*/i);
  assert.match(robots, /Allow: \//);
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
});

test("internal navigation resolves to real pages and section anchors", () => {
  for (const [route, html] of pages) {
    for (const link of tags(html, "a")) {
      const href = link.href;
      if (!href || (!href.startsWith("/") && !href.startsWith("#"))) continue;
      assert.notEqual(href, "#", `Placeholder link on ${route}`);
      const target = new URL(href, origin + route);
      const page = pages.get(target.pathname);
      assert.ok(page, `Missing internal page: ${href}`);
      if (target.hash) assert.ok(tags(page, "[a-z][a-z0-9]*").some((a) => a.id === target.hash.slice(1)), `Missing section: ${href}`);
    }
  }
});

test("responsive images exist in the static export and hero is compressed", async () => {
  for (const [route, html] of pages) {
    for (const img of tags(html, "img")) {
      assert.ok(img.alt, `Missing image alt on ${route}`);
      const sources = [img.src, ...(img.srcSet || img.srcset || "").split(",").map((s) => s.trim().split(" ")[0])].filter(Boolean);
      for (const source of sources) {
        if (source.startsWith("/")) assert.ok((await stat(resolve(root, source.slice(1)))).isFile(), source);
      }
    }
    assert.ok(html.includes(".webp"), route);
    assert.ok(!html.includes('src="/images/hero-technician-ai-v1.png"'));
  }
  const hero = await stat(resolve(root, "images/hero-technician-ai-v1-1280.webp"));
  assert.ok(hero.size < 200_000, `Hero unexpectedly large: ${hero.size}`);
});

test("unknown routes have a dedicated non-indexable error document", async () => {
  const html = await readFile(resolve(root, "404.html"), "utf8");
  assert.ok(tags(html, "meta").some((a) => a.name === "robots" && /noindex/.test(a.content)));
});

test("disabled Depok landing page is absent from the export and homepage links", async () => {
  assert.equal(await stat(htmlFile("/service-pompa/depok")).then(() => true).catch(() => false), false);
  assert.equal(await stat(resolve(root, "service-pompa/depok/index.html")).then(() => true).catch(() => false), false);
  assert.ok(!tags(pages.get("/"), "a").some((a) => a.href?.startsWith("/service-pompa/depok")));
});
