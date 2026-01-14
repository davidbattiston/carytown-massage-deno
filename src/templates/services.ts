export function renderServices(): string {
  return `<div class="page-hero">
    <img alt="Lady getting a scalp massage" src="/images/hero-images/massage-therapy-services.jpg">
  </div>
  <div class="container">
    <h1>Services</h1>
    <h2>We have a variety of massage services.</h2>
    <p>There are many benefits of massage, people enjoy a deep connection to their inner self, which allows for a new experience of self-awareness and comfort. In this modern-day technology-rich lifestyle of today, it is becoming increasingly necessary to learn to relax and regenerate.</p>
    
    <div class="card-grid">
      <a href="/services/swedish-massage" class="card">
        <img alt="Swedish massage" src="/images/hero-images/swedish-massage.jpg">
        <span>Swedish Massage</span>
      </a>
      <a href="/services/therapeutic-massage" class="card">
        <img alt="Therapeutic massage" src="/images/hero-images/therapeutic-massage.jpg">
        <span>Therapeutic Massage</span>
      </a>
      <a href="/services/sports-massage" class="card">
        <img alt="Sports massage" src="/images/hero-images/sports-massage.jpg">
        <span>Sports Massage</span>
      </a>
    </div>
  </div>`;
}
