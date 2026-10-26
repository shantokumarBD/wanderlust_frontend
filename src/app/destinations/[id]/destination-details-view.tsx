"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  MapPinIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react"

import image1 from "@/assets/destinations/image1.png"
import { EditDestination } from "@/components/edits/EditDestination"

const DEFAULT_HIGHLIGHTS = [
  "Luxury beachfront accommodation",
  "Visit Uluwatu Temple at sunset",
  "Traditional Balinese spa treatment",
  "Private beach dinner experience",
  "Sunrise trek to Mount Batur",
]

const PERKS = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
]

export function DestinationDetailsView({ destination }: { destination: any }) {
  const router = useRouter()
  const [item, setItem] = React.useState(destination)
  const [selectedDate, setSelectedDate] = React.useState(
    destination?.departureDate || "05/15/2026"
  )
  const [booked, setBooked] = React.useState(false)

  const {
    _id,
    id = _id,
    destinationName,
    title = destinationName || "Bali Paradise",
    country = "Indonesia",
    price = 1299,
    duration = "7 Days / 6 Nights",
    rating = 4.9,
    reviewsCount = 234,
    description = "Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.",
    imageUrl,
    highlights = DEFAULT_HIGHLIGHTS,
  } = item || {}

  const handleDelete = async () => {
    if (window.confirm(`Delete "${title}"?`)) {
      if (id) {
        await fetch(`http://localhost:5000/destinations/${id}`, { method: "DELETE" })
      }
      router.push("/destinations")
    }
  }

  const imageSrc = imageUrl?.trim() ? imageUrl : image1.src

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between pb-6">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="size-4" />
          <span>Back to Destinations</span>
        </Link>

        <div className="flex items-center gap-3">
          <EditDestination
            destinationId={id}
            initialData={item}
            onUpdated={(updated) => setItem((prev: any) => ({ ...prev, ...updated }))}
          />

          <button
            type="button"
            onClick={handleDelete}
            className="inline-flex items-center gap-1.5 rounded-xs border border-red-300 bg-background px-4 py-2 text-xs sm:text-sm font-medium text-red-500 transition-colors hover:bg-red-50 dark:border-red-900/60 dark:hover:bg-red-950/30"
          >
            <Trash2Icon className="size-3.5" />
            <span>Cancel</span>
          </button>
        </div>
      </div>

      {/* Hero Panoramic Banner */}
      <div className="relative aspect-[16/9] sm:aspect-[2.2/1] lg:aspect-[2.4/1] w-full overflow-hidden rounded-lg bg-muted">
        <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Content Layout */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14 items-start">
        {/* Left Column: Details */}
        <div className="space-y-8 lg:col-span-2">
          <div>
            <p className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
              <MapPinIcon className="size-4 shrink-0" />
              <span>{country}</span>
            </p>

            <h1 className="mt-1.5 font-sans text-4xl sm:text-5xl lg:text-[3.25rem] font-light tracking-tight text-foreground">
              {title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-500">
                <StarIcon className="size-4 fill-current" />
                <span>{rating}</span>
                <span className="font-normal text-muted-foreground">
                  ({reviewsCount} reviews)
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <CalendarIcon className="size-4 shrink-0" />
                <span>{duration}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light tracking-tight text-foreground sm:text-[1.75rem]">
              Overview
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light tracking-tight text-foreground sm:text-[1.75rem]">
              Highlights
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {description}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-center gap-2.5 text-sm text-foreground/90">
                  <CheckIcon className="size-4 shrink-0 text-emerald-500" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg border border-border/80 bg-card p-6 sm:p-7 shadow-xs">
            <p className="text-xs text-muted-foreground font-normal">Starting from</p>
            <div className="mt-1 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-brand">
                ${price}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">per person</p>

            <div className="mt-6">
              <div className="flex items-center rounded-xs border border-border/80 bg-neutral-50 dark:bg-neutral-900/40 px-3.5 py-3 text-sm text-foreground">
                <input
                  type="text"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  placeholder="MM/DD/YYYY"
                  className="w-full bg-transparent text-sm text-foreground outline-none"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setBooked(true)
                setTimeout(() => setBooked(false), 3000)
              }}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xs bg-brand py-3 text-sm font-semibold text-white transition-all hover:bg-brand/90 active:scale-[0.99]"
            >
              <span>Book Now</span>
              <ArrowRightIcon className="size-4" />
            </button>

            {booked && (
              <p className="mt-3 text-center text-xs text-emerald-600 dark:text-emerald-400">
                Booking request submitted for {selectedDate}!
              </p>
            )}

            <div className="mt-6 space-y-2.5 text-xs text-muted-foreground">
              {PERKS.map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <CheckIcon className="size-3.5 shrink-0 text-emerald-500" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
