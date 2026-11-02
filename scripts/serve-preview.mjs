// Local preview of the exported files. Production uses the checked-in nginx.conf.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { extname, resolve, sep } from "node:path";

const root = fileURLToPath(new URL("../out/", import.meta.url));
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "application/javascript", ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".ico": "image/x-icon" };
const aliases = new Set(["www.tirtaagungteknik.com", "zunaidipompa.zvy.my.id", "www.zunaidipompa.zvy.my.id"]);

const server = createServer(async (request, response) => {
  const host = (request.headers.host || "").split(":")[0].toLowerCase();
  if (aliases.has(host)) {
    response.writeHead(301, { Location: `https://tirtaagungteknik.com${request.url}` });
    response.end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const base = resolve(root, `.${pathname}`);
    if (base !== resolve(root) && !base.startsWith(resolve(root) + sep)) throw new Error("Invalid path");
    const candidates = pathname.endsWith("/") ? [resolve(base, "index.html")] : [base, `${base}.html`, resolve(base, "index.html")];
    let file;
    for (const candidate of candidates) {
      if (await stat(candidate).then((s) => s.isFile()).catch(() => false)) { file = candidate; break; }
    }
    const status = file ? 200 : 404;
    file ??= resolve(root, "404.html");
    const body = await readFile(file);
    response.writeHead(status, { "Content-Type": types[extname(file)] || "application/octet-stream" });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain" });
    response.end("Bad request");
  }
});

server.listen(Number(process.env.PORT || 3000), "127.0.0.1", () => {
  console.log(`Static preview: http://127.0.0.1:${server.address().port}`);
});
