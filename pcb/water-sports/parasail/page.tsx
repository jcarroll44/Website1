import ProductLanding from "@/components/ProductLanding";

export default function ParasailPage() {
  return (
    <ProductLanding
      title="Parasailing"
      subtitle="Soar above the Gulf with professional crews."
      hero="/cards/parasail.jpg"
      priceNote="$75+ per rider"
      bullets={[
        { text: "Tandem and triple flights available" },
        { text: "Panoramic views of the coastline" },
        { text: "Daily departures from multiple towers" },
      ]}
      ctaText="Book Parasailing"
      gallery={["/cards/parasail.jpg"]}
    />
  );
}
