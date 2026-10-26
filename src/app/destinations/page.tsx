import React from "react";
import { DestinationsExplorer, type DestinationItem } from "./destinations-explorer";

const getDestinations = async (): Promise<DestinationItem[]> => {
  try {
    const res = await fetch("http://localhost:5000/destinations", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn("Could not fetch destinations from backend:", error);
    return [];
  }
};

const AllDestinationsPage = async () => {
  const destinations = await getDestinations();

  return (
    <div className="min-h-svh flex flex-col bg-background">
      <main className="flex-1">
        <DestinationsExplorer initialDestinations={destinations} />
      </main>
    </div>
  );
};

export default AllDestinationsPage;
