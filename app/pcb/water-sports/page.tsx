import ProductLanding from "@/components/ProductLanding";

export default function PCBWatersportsPage() {
  return (
    <ProductLanding
      title="PCB Watersports"
      subtitle="On-the-beach rentals with pro crews and multiple daily departures."
      hero="/cards/watersports.jpg"
      priceNote="Jet Skis • Parasailing • Banana Boat • Paddleboard"
      bullets={[
        { text: "Pro operators at select towers" },
        { text: "Same-day and next-day departures" },
        { text: "Family-friendly options" },
      ]}
      ctaText="See Locations & Times"
      gallery={[
        "/cards/jetski.jpg",
        "/cards/parasail.jpg",
        "/cards/banana.jpg",
        "/cards/paddleboard.jpg",
      ]}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-sky-900">
            Choose Your Adventure
          </h2>
          <p className="mt-1 text-sky-700/80">
            All rentals are run by licensed crews with safety gear provided.
            Select your favorite watersport to see details and pricing.
          </p>
        </div>
        <ul className="space-y-3 text-sky-800">
          <li>
            <a href="/pcb/water-sports/jetski" className="hover:text-sky-600">
              • Jet Skis – $99+ / 30–60 min
            </a>
          </li>
          <li>
            <a href="/pcb/water-sports/parasail" className="hover:text-sky-600">
              • Parasailing – $75+ per rider
            </a>
          </li>
          <li>
            <a href="/pcb/water-sports/banana" className="hover:text-sky-600">
              • Banana Boat – $25+ per rider
            </a>
          </li>
          <li>
            <a
              href="/pcb/water-sports/paddleboard"
              className="hover:text-sky-600"
            >
              • Paddleboard – $35+ / hour
            </a>
          </li>
        </ul>
      </div>
    </ProductLanding>
  );
}
