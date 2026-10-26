import React from "react";
import { DestinationDetailsView, type DestinationDetail } from "./destination-details-view";

const getDestination = async (id: string): Promise<DestinationDetail | null> => {
  try {
    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch destination: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.warn("Could not fetch destination from backend, using fallback:", error);
    return null;
  }
};

const DestinationDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const fetchedDestination = await getDestination(id);

  // Fallback destination matching the reference design if id is not in database
  const destination: DestinationDetail = fetchedDestination || {
    _id: id,
    destinationName: "Bali Paradise",
    country: "Indonesia",
    price: 1299,
    duration: "7 Days / 6 Nights",
    departureDate: "05/15/2026",
    rating: "4.9",
    reviewsCount: 234,
    description:
      "Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.",
    highlights: [
      "Luxury beachfront accommodation",
      "Visit Uluwatu Temple at sunset",
      "Traditional Balinese spa treatment",
      "Private beach dinner experience",
      "Sunrise trek to Mount Batur",
    ],
  };

  return (
    <main className="min-h-svh flex-1 bg-background">
      <DestinationDetailsView destination={destination} />
    </main>
  );
};

export default DestinationDetailsPage;