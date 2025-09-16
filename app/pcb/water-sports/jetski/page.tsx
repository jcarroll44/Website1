import ProductLanding from "@/components/ProductLanding";

export default function JetskiPage() {
  return (
    <ProductLanding
      title="Jet Ski Rentals"
      subtitle="Ride the emerald waters with flexible 30–60 min sessions."
      hero="/cards/jetski.jpg"
      priceNote="$99+ / 30–60 min"
      bullets={[
        { text: "On-the-beach rentals at select towers" },
        { text: "Life jackets and instructions included" },
        { text: "Single or double rider options" },
      ]}
      ctaText="Reserve a Jet Ski"
      gallery={["/cards/jetski.jpg"]}
    />
  );
}
