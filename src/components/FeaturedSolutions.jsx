import React from "react";
const features = ["Indoor Use", "Outdoor Use", "Industrial Projects"];
export default function FeaturedSolutions() {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Featured Solutions</h2>
      <div className="flex overflow-x-auto space-x-4">
        {features.map((feat) => (
          <div key={feat} className="min-w-[200px] p-4 border rounded">
            <h4 className="font-semibold mb-1">{feat}</h4>
            <p className="text-sm">Details about {feat} solution.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
