# Carytown Massage - Deno + HTMX

A modern recreation of the Carytown Massage website using Deno as the backend and HTMX for frontend interactivity.

## Stack

- **Backend**: Deno with Oak framework
- **Frontend**: Pure HTML/CSS with HTMX for interactivity
- **Styling**: Custom CSS with design system variables
- **Maps**: Google Maps API integration
- **Analytics**: Google Analytics (gtag)

## Project Structure

```
carytown-massage-deno/
├── server.ts                 # Main Deno server
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

- **Responsive Design**: Mobile-first approach with breakpoints at 600px and 1000px
- **Mobile Menu**: HTMX-powered toggle menu for mobile navigation
- **Google Maps**: Embedded map in footer showing business location
- **Service Pages**: Individual pages for Swedish, Therapeutic, and Sports massage
- **Gift Cards**: Link to Square gift card purchasing
- **Privacy Policy**: Full privacy policy page
- **SEO**: Meta tags and proper HTML structure

## Setup

### Prerequisites

- Deno 1.40+ installed

### Installation

1. Clone or download the project
2. Navigate to the project directory
3. Ensure all images are in `public/images/`

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

## Features

### Mobile Menu
The mobile menu uses vanilla JavaScript to toggle visibility. HTMX is included for potential future enhancements.

### Google Maps
The footer includes an embedded Google Map showing the business location at 3316 W Cary St, Richmond VA 23221.

### Static Files
All images and CSS are served from the `public/` directory with proper caching headers.

## Customization

### Updating Content
Edit the template files in `src/templates/` to modify page content.

### Styling
Update `public/css/style.css` to change colors, fonts, or layout.

### Images
Replace images in `public/images/` and update references in templates.

### Google Maps API Key
Update the API key in `src/templates/layout.ts` (currently using a placeholder).

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is for Carytown Massage business use.
