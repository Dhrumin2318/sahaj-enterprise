import React from "react";
const resources = [
  "Installation Guide",
  "Brochure PDF",
  "How‑to Video",
  "Case Study",
];
export default function ResourcesGrid() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {resources.map((res) => (
          <div key={res} className="p-4 border rounded">
            <h4 className="font-semibold mb-2">{res}</h4>
            <button className="text-blue-500 underline text-sm">View</button>
          </div>
        ))}
      </div>
    </section>
  );
}
