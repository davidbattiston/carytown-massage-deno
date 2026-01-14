# Carytown Massage - Deno + HTMX

A modern recreation of the Carytown Massage website using **pure Deno** (no external dependencies) as the backend and **HTMX** for frontend interactivity.

## Stack

- **Backend**: Deno with `Deno.serve()` (zero external dependencies)
- **Frontend**: Pure HTML/CSS with HTMX
- **Styling**: Custom CSS with design system variables
- **Maps**: Google Maps API integration
- **Analytics**: Google Analytics (gtag)

## Project Structure

```
carytown-massage-deno/
├── server.ts                 # Main Deno server (no dependencies)
├── deno.json                 # Deno configuration
├── public/
│   ├── css/
│   │   └── style.css        # Main stylesheet
│   └── images/              # All static images
└── src/
    └── templates/           # HTML template files
        ├── layout.ts        # Header, footer, layout wrapper
        ├── home.ts          # Home page
        ├── about.ts         # About page
        ├── services.ts      # Services listing
        ├── serviceDetail.ts # Individual service pages
        ├── giftCards.ts     # Gift cards page
        └── privacyPolicy.ts # Privacy policy page
```

## Features

- **Zero Dependencies**: Pure Deno with no external frameworks
- **Responsive Design**: Mobile-first approach with breakpoints at 600px and 1000px
- **Mobile Menu**: JavaScript-powered toggle menu for mobile navigation
- **Google Maps**: Embedded map in footer showing business location
- **Service Pages**: Individual pages for Swedish, Therapeutic, and Sports massage
- **Gift Cards**: Link to Square gift card purchasing
- **Privacy Policy**: Full privacy policy page
- **SEO Ready**: Meta tags and proper HTML structure

## Setup

### Prerequisites

- Deno 1.40+ installed ([https://deno.land](https://deno.land))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/davidbattiston/carytown-massage-deno.git
cd carytown-massage-deno
```

2. Or download and extract the archive

### Running the Server

**Development mode (with auto-reload):**
```bash
deno task dev
```

**Production mode:**
```bash
deno task start
```

The server will start on `http://localhost:3000`

## Design System

The site uses a warm, inviting color palette:

- **Primary Color**: `#ff6f61` (Coral)
- **Secondary Color**: `#ea6876` (Rose)
- **Light Accent**: `#f8a29d` (Light Coral)
- **Background**: `#f8f8ff` (Off-white)
- **Text**: `#272727` (Dark Gray)

Typography:
- **Headings**: Trajan Pro (serif)
- **Body**: Quasimoda (serif)

## Pages

- `/` - Home page with service overview
- `/about` - About the business
- `/services` - Services listing
- `/services/swedish-massage` - Swedish massage details
- `/services/therapeutic-massage` - Therapeutic massage details
- `/services/sports-massage` - Sports massage details
- `/gift-cards` - Gift card information
- `/privacy-policy` - Privacy policy

## How It Works

### Server Architecture

The server uses Deno's built-in `Deno.serve()` API:

1. **Request Handling**: Routes are matched using URL pattern matching
2. **Template Rendering**: Each route calls a template function that returns HTML
3. **Static Files**: CSS and images are served with proper MIME types
4. **No Framework Overhead**: Direct HTTP handling with minimal abstraction

### Frontend Interactivity

- HTMX is included for potential future enhancements (currently used for mobile menu)
- Mobile menu toggle uses vanilla JavaScript
- All styling is pure CSS with no build step required

## Customization

### Updating Content
Edit the template files in `src/templates/` to modify page content.

### Styling
Update `public/css/style.css` to change colors, fonts, or layout.

### Images
Replace images in `public/images/` and update references in templates.

### Google Maps API Key
Update the API key in `src/templates/layout.ts` (currently using a placeholder).

## Deployment

### Local Development
```bash
deno task dev
```

### Production Build
No build step needed! Just run:
```bash
deno task start
```

### Deployment Options

**Deno Deploy** (Recommended)
```bash
deno deploy
```

**Docker**
```dockerfile
FROM denoland/deno:latest
WORKDIR /app
COPY . .
CMD ["deno", "run", "--allow-net", "--allow-read", "server.ts"]
```

**Any VPS/Server**
- Install Deno
- Clone the repository
- Run `deno run --allow-net --allow-read server.ts`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Zero Build Step**: Deno runs TypeScript directly
- **No Dependencies**: Faster startup, smaller memory footprint
- **Static File Serving**: Efficient streaming of CSS and images
- **Minimal Overhead**: Direct HTTP routing with no middleware layers

## License

This project is for Carytown Massage business use.

## Getting Help

- Check the [Deno documentation](https://deno.land/manual)
- Review the template files in `src/templates/` for examples
- Inspect `server.ts` for routing logic
