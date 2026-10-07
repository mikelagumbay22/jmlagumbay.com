"""Local static server that mimics GitHub Pages for the prerendered build.
  /            -> index.html
  /work        -> work.html          (flat .html lookup, no redirect, like Pages)
  /dir/        -> dir/index.html     (/dir without slash -> 301 to /dir/, like Pages)
  anything else -> 404.html with HTTP 404
  Text assets are gzip-compressed when the client accepts it (Pages does the same).
Usage: python3 scripts/pages_server.py [port=8090] [root=dist]"""
import gzip, io, os, sys, posixpath, urllib.parse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8090
ROOT = os.path.abspath(sys.argv[2] if len(sys.argv) > 2 else "dist")


class PagesHandler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map, ".webp": "image/webp", ".webmanifest": "application/manifest+json",
                      ".js": "text/javascript", ".mjs": "text/javascript", ".woff2": "font/woff2", ".xml": "application/xml", "": "application/octet-stream"}

    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def _resolve(self):
        path = urllib.parse.urlsplit(self.path).path
        path = posixpath.normpath(urllib.parse.unquote(path))
        rel = path.lstrip("/")
        full = os.path.join(ROOT, rel)
        if not os.path.realpath(full).startswith(ROOT):
            return None, None
        if os.path.isfile(full):
            return full, None
        if os.path.isdir(full):
            if not self.path.split("?")[0].endswith("/"):
                return None, path + "/"
            idx = os.path.join(full, "index.html")
            return (idx, None) if os.path.isfile(idx) else (None, None)
        if os.path.isfile(full + ".html") and not self.path.split("?")[0].endswith("/"):
            return full + ".html", None
        return None, None

    def send_head(self):
        full, redirect = self._resolve()
        if redirect:
            self.send_response(301); self.send_header("Location", redirect); self.send_header("Content-Length", "0"); self.end_headers()
            return None
        status = 200
        if not full:
            full, status = os.path.join(ROOT, "404.html"), 404
        ctype = self.guess_type(full)
        with open(full, "rb") as fh:
            body = fh.read()
        compress = "gzip" in self.headers.get("Accept-Encoding", "") and (
            ctype.startswith("text/") or ctype in ("application/json", "application/xml", "application/manifest+json", "image/svg+xml", "image/x-icon", "image/vnd.microsoft.icon"))
        if compress:
            body = gzip.compress(body, 6)
        self.send_response(status)
        self.send_header("Content-Type", ctype + ("; charset=utf-8" if ctype.startswith("text/") else ""))
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Vary", "Accept-Encoding")
        if compress:
            self.send_header("Content-Encoding", "gzip")
        cache = "public, max-age=31536000, immutable" if "/assets/" in full else "max-age=600"
        self.send_header("Cache-Control", cache)
        self.end_headers()
        return io.BytesIO(body)

    def log_message(self, fmt, *args):
        sys.stderr.write("%s %s\n" % (self.log_date_time_string(), fmt % args))


if __name__ == "__main__":
    print(f"Serving {ROOT} like GitHub Pages on http://127.0.0.1:{PORT}/", flush=True)
    ThreadingHTTPServer(("127.0.0.1", PORT), PagesHandler).serve_forever()
