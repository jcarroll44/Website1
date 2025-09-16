import OfferingPage from "@/components/OfferingPage";

export default function PCBHome() {
  return (
    <OfferingPage
      title="Panama City Beach"
      subtitle="Chairs, Bonfires, Beach Box, Watersports & More"
      heroImage="/hero-pcb.jpg"
      items={[
        {
          id: "pcb-chairs",
          name: "Beach Chairs & Umbrellas",
          price: "$55/day",
          image: "/cards/hero-pcb.jpg",
          href: "/pcb/chairs",
          blurb: "Weekly or daily sets, placed for you.",
        },
        // Remove this block if you don't want Beach Better Box on PCB
        {
          id: "pcb-box",
          name: "Beach Better Box",
          price: "$375/week",
          image: "/cards/box.jpg",
          href: "/pcb/better-box",
          blurb: "Bundle savings on beach essentials.",
        },
        {
          id: "pcb-bonfires",
          name: "Beach Bonfires",
          price: "from $500",
          image: "/cards/bonfire.jpg",
          href: "/pcb/bonfires",
          blurb: "Permitted set-up with seating.",
        },
        {
          id: "pcb-photo",
          name: "Family Photography",
          price: "$300",
          image: "/cards/photo.jpg",
          href: "/pcb/photography",
          blurb: "Golden-hour portraits.",
        },
        {
          id: "pcb-watersports",
          name: "Watersports",
          price: "See menu",
          image: "/cards/watersports.jpg",
          href: "/pcb/water-sports",
          blurb: "Jet skis, parasailing, banana boat & more.",
        },
        {
          id: "pcb-banana",
          name: "Banana Boat",
          price: "$25+",
          image: "/cards/banana.jpg",
          href: "/pcb/water-sports#banana-boat",
          blurb: "Family fun rides — multiple departures daily.",
        },
        {
          id: "pcb-parasail",
          name: "Parasailing",
          price: "$75+",
          image: "/cards/parasail.jpg",
          href: "/pcb/water-sports#parasail",
          blurb: "Soar above the emerald coast.",
        },
        {
          id: "pcb-jetski",
          name: "Jet Ski Rental",
          price: "$99+ / 30–60 min",
          image: "/cards/jetski.jpg",
          href: "/pcb/water-sports#jetski",
          blurb: "On-the-beach rentals at select towers.",
        },
        {
          id: "pcb-paddleboard",
          name: "Paddleboard Rental",
          price: "$35+ / hour",
          image: "/cards/paddleboard.jpg",
          href: "/pcb/water-sports#paddleboard",
          blurb: "Calm-water cruising — multiple launch spots daily.",
        },
      ]}
    />
  );
}
