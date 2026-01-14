import { renderLayout } from "./src/templates/layout.ts";
import { renderHome } from "./src/templates/home.ts";
import { renderAbout } from "./src/templates/about.ts";
import { renderServices } from "./src/templates/services.ts";
import { renderServiceDetail } from "./src/templates/serviceDetail.ts";
import { renderGiftCards } from "./src/templates/giftCards.ts";
import { renderPrivacyPolicy } from "./src/templates/privacyPolicy.ts";

const PORT = 3000;

// Route handler
async function handleRequest(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // Home page
  if (pathname === "/" && req.method === "GET") {
    return new Response(renderLayout("Home", renderHome()), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // About page
  if (pathname === "/about" && req.method === "GET") {
    return new Response(renderLayout("About", renderAbout()), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Services page
  if (pathname === "/services" && req.method === "GET") {
    return new Response(renderLayout("Services", renderServices()), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Service detail pages
  const serviceMatch = pathname.match(/^\/services\/([a-z-]+)$/);
  if (serviceMatch && req.method === "GET") {
    const service = serviceMatch[1];
    const title =
      service.charAt(0).toUpperCase() + service.slice(1).replace(/-/g, " ");
    return new Response(renderLayout(title, renderServiceDetail(service)), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Gift cards page
  if (pathname === "/gift-cards" && req.method === "GET") {
    return new Response(renderLayout("Gift Cards", renderGiftCards()), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Privacy policy page
  if (pathname === "/privacy-policy" && req.method === "GET") {
    return new Response(renderLayout("Privacy Policy", renderPrivacyPolicy()), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Static files (CSS, images, etc.)
  if (
    pathname.startsWith("/css/") ||
    pathname.startsWith("/images/") ||
    pathname === "/favicon.ico"
  ) {
    try {
      const filePath = `./public${pathname}`;
      const file = await Deno.open(filePath);
      const stat = await Deno.stat(filePath);

      // Determine content type
      let contentType = "application/octet-stream";
      if (pathname.endsWith(".css")) {
        contentType = "text/css";
      } else if (pathname.endsWith(".js")) {
        contentType = "application/javascript";
      } else if (pathname.endsWith(".svg")) {
        contentType = "image/svg+xml";
      } else if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) {
        contentType = "image/jpeg";
      } else if (pathname.endsWith(".png")) {
        contentType = "image/png";
      } else if (pathname.endsWith(".ico")) {
        contentType = "image/x-icon";
      }

      return new Response(file.readable, {
        headers: {
          "Content-Type": contentType,
          "Content-Length": String(stat.size),
        },
      });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  }

  // 404 for everything else
  return new Response("Not found", { status: 404 });
}

console.log(`Server running on http://localhost:${PORT}`);
await Deno.serve({ port: PORT }, handleRequest);
