"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import {
  ArrowUpRightIcon,
  CalendarIcon,
  ChevronDownIcon,
  MapPinIcon,
  StarIcon,
  XIcon,
} from "lucide-react"

import image1 from "@/assets/destinations/image1.png"
import image2 from "@/assets/destinations/image2.png"
import image3 from "@/assets/destinations/image3.png"
import image4 from "@/assets/destinations/image4.png"
import image5 from "@/assets/destinations/image5.png"
import image6 from "@/assets/destinations/image6.png"

export interface DestinationItem {
  _id?: string
  id?: string
  destinationName?: string
  title?: string
  country: string
  category?: string
  price: number | string
  duration: string
  rating?: number | string
  imageUrl?: string
  image?: StaticImageData | string
  description?: string
}

const defaultDestinations: DestinationItem[] = [
  {
    id: "bali-1",
    destinationName: "Bali Paradise",
    country: "Nepal",
    category: "Beach",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image: image1,
  },
  {
    id: "bali-2",
    destinationName: "Bali Paradise",
    country: "Nepal",
    category: "Beach",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image: image2,
  },
  {
    id: "bali-3",
    destinationName: "Bali Paradise",
    country: "Nepal",
    category: "Mountain",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image: image6,
  },
  {
    id: "bali-4",
    destinationName: "Bali Paradise",
    country: "Nepal",
    category: "Cultural",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image: image3,
  },
  {
    id: "bali-5",
    destinationName: "Bali Paradise",
    country: "Nepal",
    category: "Beach",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image: image5,
  },
  {
    id: "bali-6",
    destinationName: "Bali Paradise",
    country: "Nepal",
    category: "Desert",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image: image4,
  },
]

const fallbackImages = [image1, image2, image6, image3, image5, image4]

interface DestinationsExplorerProps {
  initialDestinations?: DestinationItem[]
}

const CATEGORIES = ["All Categories", "Beach", "Mountain", "Cultural", "Desert", "Adventure"]

const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $1,000", min: 0, max: 1000 },
  { label: "$1,000 - $2,500", min: 1000, max: 2500 },
  { label: "$2,500 - $3,500", min: 2500, max: 3500 },
  { label: "Above $3,500", min: 3500, max: Infinity },
]

const SORT_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A to Z", value: "name-asc" },
]

export function DestinationsExplorer({ initialDestinations }: DestinationsExplorerProps) {
  const items =
    initialDestinations && initialDestinations.length > 0
      ? initialDestinations
      : defaultDestinations

  const [selectedCategory, setSelectedCategory] = React.useState("All Categories")
  const [selectedPriceRange, setSelectedPriceRange] = React.useState("All Prices")
  const [selectedSort, setSelectedSort] = React.useState("default")

  const [openDropdown, setOpenDropdown] = React.useState<"category" | "price" | "sort" | null>(null)

  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const filteredAndSorted = React.useMemo(() => {
    return items
      .filter((item) => {
        // Category filter
        if (selectedCategory !== "All Categories") {
          const itemCat = item.category?.toLowerCase() || ""
          if (itemCat !== selectedCategory.toLowerCase()) {
            return false
          }
        }

        // Price range filter
        const priceNum = Number(item.price) || 0
        const range = PRICE_RANGES.find((r) => r.label === selectedPriceRange)
        if (range) {
          if (priceNum < range.min || priceNum > range.max) {
            return false
          }
        }

        return true
      })
      .sort((a, b) => {
        const priceA = Number(a.price) || 0
        const priceB = Number(b.price) || 0
        const nameA = (a.destinationName || a.title || "").toLowerCase()
        const nameB = (b.destinationName || b.title || "").toLowerCase()

        if (selectedSort === "price-asc") return priceA - priceB
        if (selectedSort === "price-desc") return priceB - priceA
        if (selectedSort === "name-asc") return nameA.localeCompare(nameB)
        return 0
      })
  }, [items, selectedCategory, selectedPriceRange, selectedSort])

  const hasActiveFilters =
    selectedCategory !== "All Categories" ||
    selectedPriceRange !== "All Prices" ||
    selectedSort !== "default"

  const handleResetFilters = () => {
    setSelectedCategory("All Categories")
    setSelectedPriceRange("All Prices")
    setSelectedSort("default")
    setOpenDropdown(null)
  }

  return (
    <section className="w-full py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.25rem] font-light tracking-tight text-foreground">
            Explore All Destinations
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground font-light">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filter Bar */}
        <div ref={dropdownRef} className="relative mt-8 sm:mt-10">
          <div className="grid grid-cols-1 divide-y border border-border/80 bg-background md:grid-cols-3 md:divide-y-0 md:divide-x md:divide-border/80">
            {/* Category Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "category" ? null : "category")}
                className="flex h-12 w-full items-center justify-between px-5 text-left text-xs font-medium tracking-wider text-muted-foreground uppercase transition-colors hover:bg-muted/40 focus:outline-none"
              >
                <span className="truncate">
                  {selectedCategory === "All Categories" ? "CATEGORY" : `CATEGORY: ${selectedCategory}`}
                </span>
                <ChevronDownIcon
                  className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openDropdown === "category" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "category" && (
                <div className="absolute top-full left-0 z-50 mt-1 w-full min-w-48 border border-border bg-popover py-1 shadow-md">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category)
                        setOpenDropdown(null)
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-xs transition-colors hover:bg-accent hover:text-accent-foreground ${
                        selectedCategory === category
                          ? "bg-accent/60 font-semibold text-brand"
                          : "text-foreground"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "price" ? null : "price")}
                className="flex h-12 w-full items-center justify-between px-5 text-left text-xs font-medium tracking-wider text-muted-foreground uppercase transition-colors hover:bg-muted/40 focus:outline-none"
              >
                <span className="truncate">
                  {selectedPriceRange === "All Prices" ? "PRICE RANGE" : `PRICE: ${selectedPriceRange}`}
                </span>
                <ChevronDownIcon
                  className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openDropdown === "price" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "price" && (
                <div className="absolute top-full left-0 z-50 mt-1 w-full min-w-48 border border-border bg-popover py-1 shadow-md">
                  {PRICE_RANGES.map((range) => (
                    <button
                      key={range.label}
                      type="button"
                      onClick={() => {
                        setSelectedPriceRange(range.label)
                        setOpenDropdown(null)
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-xs transition-colors hover:bg-accent hover:text-accent-foreground ${
                        selectedPriceRange === range.label
                          ? "bg-accent/60 font-semibold text-brand"
                          : "text-foreground"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort By Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "sort" ? null : "sort")}
                className="flex h-12 w-full items-center justify-between px-5 text-left text-xs font-medium tracking-wider text-muted-foreground uppercase transition-colors hover:bg-muted/40 focus:outline-none"
              >
                <span className="truncate">
                  {selectedSort === "default"
                    ? "SORT BY"
                    : `SORT: ${SORT_OPTIONS.find((s) => s.value === selectedSort)?.label}`}
                </span>
                <ChevronDownIcon
                  className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openDropdown === "sort" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "sort" && (
                <div className="absolute top-full left-0 z-50 mt-1 w-full min-w-48 border border-border bg-popover py-1 shadow-md">
                  {SORT_OPTIONS.map((sortOpt) => (
                    <button
                      key={sortOpt.value}
                      type="button"
                      onClick={() => {
                        setSelectedSort(sortOpt.value)
                        setOpenDropdown(null)
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2 text-xs transition-colors hover:bg-accent hover:text-accent-foreground ${
                        selectedSort === sortOpt.value
                          ? "bg-accent/60 font-semibold text-brand"
                          : "text-foreground"
                      }`}
                    >
                      {sortOpt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Counter and Filter Reset */}
        <div className="mt-6 mb-8 flex items-center justify-between">
          <p className="text-sm font-normal text-muted-foreground">
            Showing {filteredAndSorted.length} destination{filteredAndSorted.length === 1 ? "" : "s"}
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-xs text-brand hover:underline"
            >
              <XIcon className="size-3.5" />
              Reset filters
            </button>
          )}
        </div>

        {/* Destinations Grid */}
        {filteredAndSorted.length === 0 ? (
          <div className="border border-dashed border-border py-16 text-center">
            <p className="text-base font-medium text-foreground">No destinations found</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Try adjusting your filters or price range.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-4 text-xs font-semibold text-brand underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 sm:gap-y-12">
            {filteredAndSorted.map((destination, index) => {
              const imageSrc =
                destination.image ||
                (destination.imageUrl && destination.imageUrl.trim() !== ""
                  ? destination.imageUrl
                  : fallbackImages[index % fallbackImages.length])

              const title = destination.destinationName || destination.title || "Travel Destination"
              const duration = destination.duration || "7 Days/6 Nights"
              const rating = destination.rating || 4.5
              const id = destination._id || destination.id || String(index)

              return (
                <article key={id} className="group flex flex-col">
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {typeof imageSrc === "string" ? (
                      <img
                        src={imageSrc}
                        alt={`${title}, ${destination.country}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={imageSrc}
                        alt={`${title}, ${destination.country}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}

                    {/* Rating Badge */}
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white/90 px-2 py-0.5 text-xs font-semibold text-foreground shadow-xs dark:bg-black/75">
                      <span>{rating}</span>
                      <StarIcon className="size-3 fill-foreground text-foreground" aria-hidden />
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="mt-3.5 flex flex-1 flex-col">
                    {/* Location */}
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPinIcon className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
                      <span>{destination.country}</span>
                    </p>

                    {/* Title & Price */}
                    <div className="mt-1 flex items-baseline justify-between gap-3">
                      <h3 className="text-base sm:text-lg font-medium tracking-tight text-foreground">
                        {title}
                      </h3>
                      <p className="shrink-0 whitespace-nowrap">
                        <span className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
                          ${destination.price}
                        </span>
                        <span className="text-xs text-muted-foreground font-normal">
                          /Person
                        </span>
                      </p>
                    </div>

                    {/* Duration */}
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarIcon className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
                      <span>{duration}</span>
                    </p>

                    {/* Action link */}
                    <div className="mt-3.5 pt-1">
                      <Link
                        href={`/destinations/${id}`}
                        className="inline-flex items-center gap-1 border-b border-brand pb-0.5 text-xs font-semibold tracking-wider text-brand uppercase transition-opacity hover:opacity-80"
                      >
                        <span>BOOK NOW</span>
                        <ArrowUpRightIcon className="size-3.5 text-brand" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
