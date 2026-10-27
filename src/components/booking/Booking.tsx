"use client";

import { ArrowRightIcon } from "lucide-react";
import React from "react";

interface BookingProps {
  destination?: any;
  selectedDate?: string;
}

const Booking = ({ destination, selectedDate }: BookingProps) => {
  const [booked, setBooked] = React.useState(false);
  const dateToDisplay =
    selectedDate || destination?.departureDate || "05/15/2026";


    
  const handleBookNow = () => {
    console.log("Selected Booking Date:", dateToDisplay);
    console.log("Destination Details:", destination);

    setBooked(true);
    setTimeout(() => setBooked(false), 3000);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleBookNow}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xs bg-brand py-3 text-sm font-semibold text-white transition-all hover:bg-brand/90 active:scale-[0.99] cursor-pointer"
      >
        <span>Book Now</span>
        <ArrowRightIcon className="size-4" />
      </button>

      {booked && (
        <p className="mt-3 text-center text-xs text-emerald-600 dark:text-emerald-400">
          Booking request submitted for {dateToDisplay}!
        </p>
      )}
    </div>
  );
};

export default Booking;
