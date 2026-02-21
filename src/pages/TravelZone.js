import Breadcrumb from "../components/Breadcrumb";
import "./TravelZone.css";

export default function TravelZone() {
  const domesticDestinations = [
  { name: "Kerala", image: "/images/travel/kerala.jpg" },
  { name: "Karnataka", image: "/images/travel/karnataka.jpg" },
  { name: "Ayodhya", image: "/images/travel/ayodhya.jpg" },
  { name: "Darjeeling", image: "/images/travel/darjeeling.jpg" },
  { name: "Sikkim", image: "/images/travel/sikkim.jpg" },
  { name: "Andaman", image: "/images/travel/andaman.jpg" }
];


  const internationalDestinations = [
  { name: "Malaysia", image: "/images/travel/malaysia.jpg" },
  { name: "Singapore", image: "/images/travel/singapore.jpg" },
  { name: "Dubai", image: "/images/travel/dubai.jpg" },
  { name: "Thailand", image: "/images/travel/thailand.jpg" },
  { name: "Indonesia", image: "/images/travel/indonesia.jpg" }
];

  return (
    <div className="travel-zone-modern">
      <Breadcrumb />

      {/* Compact Hero */}
      <section className="travel-hero">
        <h1>Travel Zone</h1>
        <p>
          Your trusted partner for remarkable journeys. With two decades of experience,
          we craft premium Domestic and International Group Tours tailored for every traveler.
        </p>
      </section>


      {/* Destinations */}
      <section className="dest-section">
        <h2>Domestic Destinations</h2>
        <div className="destinations-grid">
          {domesticDestinations.map((d, i) => (
            <div className="dest-card" key={i} style={{ backgroundImage: `url(${d.image})` }}>
              <span>{d.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="dest-section">
        <h2>International Destinations</h2>
        <div className="international-highlight">
  <span className="globe">🌐</span>
  <p>
    Handpicked international destinations including
    <strong> Dubai</strong>, <strong> Thailand</strong>, <strong> Singapore</strong>,
    <strong> Malaysia</strong> and <strong> Indonesia</strong> —
    designed for memorable group travel experiences.
  </p>
</div>

        <div className="destinations-grid">
          {internationalDestinations.map((d, i) => (
            <div className="dest-card" key={i} style={{ backgroundImage: `url(${d.image})` }}>
              <span>{d.name}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
