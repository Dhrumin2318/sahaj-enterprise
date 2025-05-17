import React from "react";
const categories = [
  { name: "Tile Adhesives" },
  { name: "Grouts" },
  { name: "Waterproofing" },
  { name: "Stone Care" },
];

export default function CategoryGrid() {
  return (
    <section className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((cat) => (
        <div key={cat.name} className="p-4 border rounded hover:shadow-lg">
          <h3 className="font-bold mb-2">{cat.name}</h3>
          <p className="text-sm">Description for {cat.name}.</p>
        </div>
      ))}
    </section>
  );
}
