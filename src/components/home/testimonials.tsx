"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import person1 from "@/assets/person1.png"
import person2 from "@/assets/person2.png"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel"

const testimonials = [
  {
    id: "michael-chen",
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    author: "Michael Chen",
    location: "Singapore",
    image: person2,
  },
  {
    id: "sarah-johnson",
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    author: "Sarah Johnson",
    location: "New York, USA",
    image: person1,
  },
  {
    id: "david-miller",
    quote:
      '"Exploring the hidden gems and vibrant local markets was a dream come true. The personalized itinerary made our holiday completely stress-free."',
    author: "David Miller",
    location: "London, UK",
    image: person2,
  },
  {
    id: "elena-rostova",
    quote:
      '"An unforgettable expedition through picturesque landscapes and rich local traditions. Every single excursion was curated with precision and warmth."',
    author: "Elena Rostova",
    location: "Sydney, Australia",
    image: person1,
  },
]

function CarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()

  return (
    <div className="flex shrink-0 items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous testimonials"
        className="size-10 sm:size-11 rounded-full border-border/80 text-foreground/80 hover:bg-muted hover:text-foreground disabled:opacity-35 transition-colors"
      >
        <ArrowLeftIcon className="size-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next testimonials"
        className="size-10 sm:size-11 rounded-full border-border/80 text-foreground/80 hover:bg-muted hover:text-foreground disabled:opacity-35 transition-colors"
      >
        <ArrowRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header area with Title, Subtitle, and Controls */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                What Travelers Say
              </h2>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                Real experiences from our happy travelers
              </p>
            </div>

            <CarouselControls />
          </div>

          {/* Testimonial Cards Carousel Content */}
          <CarouselContent className="-ml-6 mt-10 sm:mt-12">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-6 basis-full lg:basis-1/2"
              >
                <Card className="h-full rounded-none border border-border/80 bg-card p-6 sm:p-8 shadow-none ring-0">
                  <div className="flex h-full flex-col-reverse justify-between gap-6 sm:flex-row sm:items-stretch">
                    {/* Left: Quote & Author info */}
                    <div className="flex flex-1 flex-col justify-between">
                      <p className="text-sm font-normal leading-relaxed text-foreground/90 sm:text-base">
                        {item.quote}
                      </p>

                      <div className="mt-8">
                        <p className="text-sm font-medium text-brand">
                          — {item.author}
                        </p>
                        <p className="text-xs text-muted-foreground pl-4 mt-0.5">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    {/* Right: Author Photo */}
                    <div className="relative shrink-0 w-full sm:w-40 md:w-48 aspect-[4/5] sm:aspect-auto sm:h-full min-h-[180px] overflow-hidden bg-muted">
                      <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 35vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
