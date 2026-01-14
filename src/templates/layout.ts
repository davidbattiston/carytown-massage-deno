export function renderLayout(title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Carytown Massage</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
    <script src="https://unpkg.com/htmx.org@1.9.10"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-9G83G1JX69"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9G83G1JX69');
    </script>
</head>
<body>
    ${renderHeader()}
    <main>
        ${content}
    </main>
    ${renderFooter()}
</body>
</html>`;
}

function renderHeader(): string {
  return `<header>
    <nav>
        <div class="logo-div">
            <a href="/">
                <img alt="Carytown Massage Logo" src="/images/Carytown-Massage-Logo.svg" class="logo">
            </a>
            <button id="menu-toggle" class="menu-button" aria-label="Navigation Menu">
                <img alt="menu" src="/images/menu.svg" id="menu-icon">
            </button>
        </div>
        <ul class="nav-list" id="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gift-cards">Gift Cards</a></li>
            <li><a class="phone" href="tel:804-424-2607">(804) 424-2607</a></li>
            <li><a class="booking" href="https://massage-on-main-llc.square.site/">Booking</a></li>
        </ul>
        <ul class="contact-list" id="contact-list">
            <li><div class="spacer"></div></li>
            <li><span>Anthony@carytownmassage.com</span></li>
            <li><span>3316 West Cary St, StylePod, Unit 104</span></li>
            <li><span>Richmond, Virginia 23221</span></li>
        </ul>
    </nav>
    <a href="https://massage-on-main-llc.square.site/" class="mobile-booking">Booking</a>
</header>

<script>
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const contactList = document.getElementById('contact-list');
    const menuIcon = document.getElementById('menu-icon');
    let isOpen = false;

    menuToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            navList.style.display = 'flex';
            contactList.style.display = 'flex';
            menuIcon.src = '/images/x.svg';
        } else {
            navList.style.display = 'none';
            contactList.style.display = 'none';
            menuIcon.src = '/images/menu.svg';
        }
    });

    // Close menu on navigation
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            isOpen = false;
            navList.style.display = 'none';
            contactList.style.display = 'none';
            menuIcon.src = '/images/menu.svg';
        });
    });
</script>`;
}

function renderFooter(): string {
  const year = new Date().getFullYear();
  return `<footer>
    <div class="container">
        <div>
            <h3>Locate Us</h3>
            <p>Carytown Massage is located at 3316 W Cary St, Richmond VA 23221 inside the StylePod building, we are in unit 104. There is free parking available in the back and paid parking available in the parking garage behind our building. Our building marked in pink on the map.</p>
            <p>Any missed calls will usually be returned within the hour. Feel free to text us at (804) 424-2607 with any questions you may have.</p>
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9AM - 10PM</p>
            <p>Saturday - Sunday: 10AM - 7PM</p>
            <h4>Connect With Us</h4>
            <p><a href="mailto:anthony@massageonmainrva.com">Anthony@massageonmainrva.com</a></p>
            <p><a href="https://www.facebook.com/CarytownMassage/">Facebook ↗</a></p>
        </div>
        <div>
            <div class="map-container" id="map"></div>
        </div>
        <span class="copyright"><a href="/privacy-policy">Privacy Policy</a> | &copy; ${year} Carytown Massage</span>
    </div>
</footer>

<script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDummyKeyForNow"></script>
<script>
    function initMap() {
        const mapStyle = [
            {
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#616161"}]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#bdbdbd"}]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{"color": "#eeeeee"}]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#e5e5e5"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{"color": "#dadada"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#616161"}]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{"color": "#e5e5e5"}]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{"color": "#eeeeee"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#c9c9c9"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            }
        ];

        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 19,
            center: { lat: 37.55462875256322, lng: -77.48456310462822 },
            styles: mapStyle,
            disableDefaultUI: true
        });

        new google.maps.Marker({
            position: { lat: 37.55462875256322, lng: -77.48456310462822 },
            map: map,
            title: 'Carytown Massage'
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMap);
    } else {
        initMap();
    }
</script>`;
}
