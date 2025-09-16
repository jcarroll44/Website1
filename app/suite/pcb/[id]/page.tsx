import properties from "@/data/properties.json";
import AmenitySuitePro from "@/components/AmenitySuitePro";

type Params = { params: { id: string } };
type P = {
  id: string;
  market: string;
  name: string;
  address?: string;
  coords?: [number, number];
  amenities?: Record<string, boolean>;
};

export default function PCBSuiteById({ params }: Params) {
  const p = (properties as P[]).find(
    (x) =>
      x.market.toLowerCase() === "pcb" &&
      x.id.toLowerCase() === params.id.toLowerCase()
  );
  if (!p)
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">Unknown property.</main>
    );

  return (
    <main className="pb-10">
      <div className="mx-auto w-full max-w-6xl px-4 pt-6">
        <AmenitySuitePro
          market="pcb"
          property={{
            name: p.name,
            address: p.address,
            homeIncludedSets: 0,
            coords: p.coords,
            amenities: { watersports: true, ...(p.amenities || {}) },
          }}
        />
      </div>
    </main>
  );
}
