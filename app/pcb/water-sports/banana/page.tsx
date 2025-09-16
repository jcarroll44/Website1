import ProductLanding from "@/components/ProductLanding";

export default function BananaBoatPage() {
  return (
    <ProductLanding
      title="Banana Boat Rides"
      subtitle="Family fun on the waves with multiple daily departures."
      hero="/cards/banana.jpg"
      priceNote="$25+ per rider"
      bullets={[
        { text: "Great for groups and kids" },
        { text: "Crewed and safe with life jackets" },
        { text: "Multiple departure times daily" },
      ]}
      ctaText="Ride the Banana Boat"
      gallery={["/cards/banana.jpg"]}
    />
  );
}
