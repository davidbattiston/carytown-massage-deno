import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { renderLayout } from "./src/templates/layout.ts";
import { renderHome } from "./src/templates/home.ts";
import { renderAbout } from "./src/templates/about.ts";
import { renderServices } from "./src/templates/services.ts";
import { renderServiceDetail } from "./src/templates/serviceDetail.ts";
import { renderGiftCards } from "./src/templates/giftCards.ts";
import { renderPrivacyPolicy } from "./src/templates/privacyPolicy.ts";

const router = new Router();

// Home page
router.get("/", (ctx) => {
  ctx.response.body = renderLayout("Home", renderHome());
  ctx.response.headers.set("Content-Type", "text/html; charset=utf-8");
});

// About page
router.get("/about", (ctx) => {
  ctx.response.body = renderLayout("About", renderAbout());
  ctx.response.headers.set("Content-Type", "text/html; charset=utf-8");
});

// Services page
router.get("/services", (ctx) => {
  ctx.response.body = renderLayout("Services", renderServices());
  ctx.response.headers.set("Content-Type", "text/html; charset=utf-8");
});

// Service detail pages
router.get("/services/:service", (ctx) => {
  const service = ctx.params.service as string;
  ctx.response.body = renderLayout(
    service.charAt(0).toUpperCase() + service.slice(1).replace(/-/g, " "),
    renderServiceDetail(service)
  );
  ctx.response.headers.set("Content-Type", "text/html; charset=utf-8");
});

// Gift cards page
router.get("/gift-cards", (ctx) => {
  ctx.response.body = renderLayout("Gift Cards", renderGiftCards());
  ctx.response.headers.set("Content-Type", "text/html; charset=utf-8");
});

// Privacy policy page
router.get("/privacy-policy", (ctx) => {
  ctx.response.body = renderLayout("Privacy Policy", renderPrivacyPolicy());
  ctx.response.headers.set("Content-Type", "text/html; charset=utf-8");
});

// Static file middleware
const app = new Application();

// Logger middleware
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Router middleware
app.use(router.routes());
app.use(router.allowedMethods());

// Static files middleware
app.use(async (ctx) => {
  const path = ctx.request.url.pathname;
  
  // Serve static files from public directory
  if (path.startsWith("/css/") || path.startsWith("/images/") || path === "/favicon.ico") {
    try {
      const filePath = `./public${path}`;
      const file = await Deno.open(filePath);
      const stat = await Deno.stat(filePath);
      
      ctx.response.body = file;
      
      // Set content type
      if (path.endsWith(".css")) {
        ctx.response.headers.set("Content-Type", "text/css");
      } else if (path.endsWith(".js")) {
        ctx.response.headers.set("Content-Type", "application/javascript");
      } else if (path.endsWith(".svg")) {
        ctx.response.headers.set("Content-Type", "image/svg+xml");
      } else if (path.endsWith(".jpg") || path.endsWith(".jpeg")) {
        ctx.response.headers.set("Content-Type", "image/jpeg");
      } else if (path.endsWith(".png")) {
        ctx.response.headers.set("Content-Type", "image/png");
      } else if (path.endsWith(".ico")) {
        ctx.response.headers.set("Content-Type", "image/x-icon");
      }
      
      ctx.response.headers.set("Content-Length", String(stat.size));
    } catch {
      ctx.response.status = 404;
      ctx.response.body = "Not found";
    }
  } else {
    ctx.response.status = 404;
    ctx.response.body = "Not found";
  }
});

const PORT = 3000;
console.log(`Server running on http://localhost:${PORT}`);
await app.listen({ port: PORT });
