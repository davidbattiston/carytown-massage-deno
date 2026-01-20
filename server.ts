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
    const title = "Carytown Massage";
    const description =
      "Carytown Massage is located in the heart of Richmond, VA. Massage will help you escape from today's erratic and busy life. Massage Therapy Richmond VA.";
    return new Response(renderLayout(title, description, renderHome()), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // About page
  if (pathname === "/about" && req.method === "GET") {
    const title = "About Carytown Massage";
    const description =
      "Established in 2020, we focus on providing Richmond with therapeutic massage services to help improve their health conditions and overall well-being.";
    return new Response(renderLayout(title, description, renderAbout()), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Services page
  if (pathname === "/services" && req.method === "GET") {
    const title = "A variety of massage services";
    const description =
      "There are many benefits of massage, people enjoy a deep connection to their inner self, which allows for a new experience of comfort.";
    return new Response(renderLayout(title, description, renderServices()), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Service detail pages
  const serviceMatch = pathname.match(/^\/services\/([a-z-]+)$/);
  if (serviceMatch && req.method === "GET") {
    const service = serviceMatch[1];

    let title = "";
    let description = "";
    switch (service) {
      case "swedish-massage":
        title = "The best swedish massage in Richmond";
        description =
          "Swedish Massage services to refresh and rejuvenate your entire body. Take a break from your busy life to experience this blissful escape in Richmond VA.";
        break;
      case "therapeutic-massage":
        title = "Best therapeutic massage in Richmond";
        description =
          "Therapeutic massage is extremely healing and refreshing. Take a break from your busy life to experience this blissful escape in Richmond VA.";
        break;
      case "sports-massage":
        title = "Massage for all sports and activities";
        description =
          "Come visit us at Carytown Massage. Sports Massage is for athletes and competitors. Refresh and rejuvenate your body.";
        break;
      default:
        title = "A variety of massage services.";
        description = "Discover our massage services";
    }

    return new Response(
      renderLayout(title, description, renderServiceDetail(service)),
      {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      },
    );
  }

  // Gift cards page
  if (pathname === "/gift-cards" && req.method === "GET") {
    const title = "Gift Cards";
    const description =
      "Carytown Massage is located in the heart of Richmond, VA. Massage will help you escape from today's erratic and busy life. Massage Therapy Richmond VA.";
    return new Response(renderLayout(title, description, renderGiftCards()), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Privacy policy page
  if (pathname === "/privacy-policy" && req.method === "GET") {
    const title = "Privacy Policy";
    const description =
      "We have prepared this policy to give you notice. This notice applies only to Carytown Massage and not to any other sites with which we link.";
    return new Response(
      renderLayout(title, description, renderPrivacyPolicy()),
      {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      },
    );
  }

  // Static files (CSS, images, etc.)
  if (
    pathname.startsWith("/images/") ||
    pathname.startsWith("/images/favicon.ico") ||
    pathname === "/htmx.min.js" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/sitemap-0.xml" ||
    pathname === "/style.css"
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
