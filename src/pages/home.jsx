import React from "react";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedSolutions from "../components/FeaturedSolutions";
import ResourcesGrid from "../components/ResourcesGrid";
import DealerLocator from "../components/DealerLocator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <CategoryGrid />
        <FeaturedSolutions />
        <ResourcesGrid />
        <DealerLocator />
      </main>
    </div>
  );
}
