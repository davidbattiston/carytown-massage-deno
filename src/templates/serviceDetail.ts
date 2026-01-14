const serviceContent: Record<string, { title: string; subtitle: string; hero: string; content: string[] }> = {
  "swedish-massage": {
    title: "Swedish Massage",
    subtitle: "Break free from your busy schedule with a Swedish Massage",
    hero: "/images/hero-images/swedish-massage.jpg",
    content: [
      "One of the most requested massage treatments is the Swedish Massage due to its advantageous properties. It is relaxing and leaves the person feeling completely at ease. Swedish massage is the gentlest of all the massages. Its benefits include increased flexibility, stress relief, improved circulation, and skin nourishment.",
      "Our licensed therapists ensure that every client is comfortable and thoroughly understands their needs before beginning a session. If you feel any discomfort then our therapist will adjust the pressure to what is right for you. We will do our very best to ensure that you experience a great Swedish massage. So, make an appointment and prepare yourself for a soothing massage."
    ]
  },
  "therapeutic-massage": {
    title: "Therapeutic Massage",
    subtitle: "Rejuvenate your body with massage therapy.",
    hero: "/images/hero-images/therapeutic-massage.jpg",
    content: [
      "Our therapeutic massage reaches the deep layers of the targeted muscle and relaxes the body. The benefits start almost instantly; the relaxing of muscles, better blood circulation, increase in oxygen levels, and the break down of knots.",
      "A therapeutic massage is extremely healing and refreshing. Our goal is to melt away all of your muscle tension and increase blood flow."
    ]
  },
  "sports-massage": {
    title: "Sports Massage",
    subtitle: "Massage for runners, cyclists, and athletes",
    hero: "/images/hero-images/sports-massage.jpg",
    content: [
      "One of our most popular massages is the Sports massage for athletes and sports enthusiasts to promote better muscle performance.",
      "Moreover, it helps to prevent injury, muscle damage, and progress quick recovery. We ensure that our clients are comfortable before beginning each session. Our professional therapists are equipped to release stiffness and muscle pain."
    ]
  }
};

export function renderServiceDetail(service: string): string {
  const data = serviceContent[service];
  
  if (!data) {
    return `<div class="container"><h1>Service not found</h1></div>`;
  }

  return `<div class="page-hero">
    <img alt="${data.title}" src="${data.hero}">
  </div>
  <div class="container">
    <h1>${data.title}</h1>
    <h2>${data.subtitle}</h2>
    ${data.content.map(p => `<p>${p}</p>`).join("")}
  </div>`;
}
