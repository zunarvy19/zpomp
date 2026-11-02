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
