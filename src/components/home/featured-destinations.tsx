"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "lucide-react"
import { cn } from "cn"

import image1 from "@/assets/destinations/image1.png"
import image2 from "@/assets/destinations/image2.png"
import image3 from "@/assets/destinations/image3.png"
import image5 from "@/assets/destinations/image5.png"
import image6 from "@/assets/destinations/image6.png"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  useCarousel,
} from "@/components/ui/carousel"

const destinations = [
  {
    id: "annapurna-sanctuary",
    image: image6,
    country: "Nepal",
    title: "Annapurna Sanctuary",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.8,
  },
  {
    id: "bali-paradise",
    image: image5,
    country: "Indonesia",
    title: "Bali Paradise",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
  },
  {
    id: "machu-picchu",
    image: image3,
    country: "Peru",
    title: "Machu Picchu",
    price: 3200,
    duration: "8 Days/7 Nights",
    rating: 4.8,
  },
  {
    id: "desert-oasis",
    image: image1,
    country: "United States",
    title: "Desert Oasis",
    price: 1900,
    duration: "4 Days/3 Nights",
    rating: 4.7,
  },
  {
    id: "island-escape",
    image: image2,
    country: "Thailand",
    title: "Island Escape",
    price: 2300,
    duration: "5 Days/4 Nights",
    rating: 4.6,
  },
]

function CarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()

  return (
    <div className="flex shrink-0 items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous destinations"
        className="size-8 rounded-full border-border/80 text-muted-foreground hover:text-foreground"
      >
        <ChevronLeftIcon className="size-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next destinations"
        className="size-8 rounded-full border-border/80 text-muted-foreground hover:text-foreground"
      >
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export function FeaturedDestinations() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [snaps, setSnaps] = React.useState(destinations.length)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
      setSnaps(api.scrollSnapList().length)
    }

    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  const progress = snaps > 1 ? (current / (snaps - 1)) * 100 : 100

  return (
    <section
      id="destinations"
      className="scroll-mt-14 bg-background py-14 sm:py-16 lg:scroll-mt-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Featured Destinations
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>

          <Link
            href="#destinations"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-9 w-full rounded-none border-brand/40 px-4 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase hover:bg-brand/5 hover:text-brand sm:mt-1 sm:w-auto"
            )}
          >
            All Destinations
            <ArrowRightIcon className="size-3.5" aria-hidden />
          </Link>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start" }}
          aria-label="Featured destinations"
          className="mt-8 sm:mt-10"
        >
          <CarouselContent className="-ml-5">
            {destinations.map((destination) => (
              <CarouselItem
                key={destination.id}
                className="basis-[86%] pl-5 sm:basis-1/2 lg:basis-1/3"
              >
                <article className="group flex h-full flex-col">
                  <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                    <Image
                      src={destination.image}
                      alt={`${destination.title}, ${destination.country}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 86vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white px-2 py-1 text-xs font-semibold text-foreground shadow-sm">
                      {destination.rating}
                      <StarIcon
                        className="size-3 fill-foreground text-foreground"
                        aria-hidden
                      />
                    </span>
                  </div>

                  <div className="mt-4 flex flex-1 flex-col">
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPinIcon className="size-3.5" aria-hidden />
                      {destination.country}
                    </p>

                    <div className="mt-1.5 flex items-start justify-between gap-4">
                      <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                        {destination.title}
                      </h3>
                      <p className="shrink-0 whitespace-nowrap">
                        <span className="text-lg font-medium sm:text-xl">
                          ${destination.price}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          /Person
                        </span>
                      </p>
                    </div>

                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <BriefcaseIcon className="size-3.5" aria-hidden />
                      {destination.duration}
                    </p>

                    <div className="mt-auto pt-3">
                      <Link
                        href={`/destinations/${destination.id}`}
                        className="inline-flex w-fit items-center gap-1 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase transition-colors hover:text-brand/80"
                      >
                        Book Now
                        <ArrowUpRightIcon className="size-3.5" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center gap-4 sm:gap-6">
            <span className="w-8 text-xs font-medium tabular-nums">
              {current + 1}/{destinations.length}
            </span>
            <div className="h-px flex-1 overflow-hidden bg-border" aria-hidden>
              <div
                className="h-full bg-brand transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <CarouselControls />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
