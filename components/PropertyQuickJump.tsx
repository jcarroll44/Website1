// app/components/PropertyQuickJump.tsx
"use client";

import { useRouter } from "next/navigation";

type Option = { id: string; name: string };

export default function PropertyQuickJump({
  market,
  options,
}: {
  market: string;
  options: Option[];
}) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm text-sky-700 whitespace-nowrap">
        Select your property:
      </label>
      <select
        className="w-full max-w-lg rounded-xl border border-sky-300 bg-white px-3 py-2 text-sky-900 outline-none focus:ring-2 focus:ring-sky-300"
        defaultValue=""
        onChange={(e) => {
          const v = e.target.value;
          if (v) router.push(`/suite/${market}/${v}`);
        }}
      >
        <option value="" disabled>
          Choose from list…
        </option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}
