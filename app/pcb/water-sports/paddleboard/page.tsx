import ProductLanding from "@/components/ProductLanding";

export default function PaddleboardPage() {
  return (
    <ProductLanding
      title="Paddleboard Rentals"
      subtitle="Calm-water cruising — launch daily at select towers."
      hero="/cards/paddleboard.jpg"
      priceNote="$35+ / hour"
      bullets={[
        { text: "Easy to learn and great exercise" },
        { text: "Launch from multiple beach spots" },
        { text: "Single board rentals by the hour" },
      ]}
      ctaText="Reserve Paddleboard"
      gallery={["/cards/paddleboard.jpg"]}
    />
  );
}
