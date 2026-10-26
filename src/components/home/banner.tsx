import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { cn } from "cn"

import bannerImage from "@/assets/Banner.png"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const searchFields = [
  { label: "Date/Duration", value: "Anytime/3 Days" },
  { label: "Budget", value: "$0-$3000" },
  { label: "People", value: "5-10" },
]

export function Banner() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-3.5rem)] flex-col overflow-hidden lg:min-h-[calc(100svh-4rem)]">
      <Image
        src={bannerImage}
        alt="Aerial view of a coastal village surrounded by pine-covered hills and a turquoise bay"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/40"
      />

      <div className="flex flex-1 items-center justify-center px-4 pt-14 pb-12 sm:px-6 lg:pt-20 lg:pb-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h1 className="font-display text-[2.75rem] leading-[1.04] font-normal tracking-[-0.015em] text-balance text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            <span className="block">Discover Your</span>
            <span className="block">Next Adventure</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-white/90 sm:text-lg">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center sm:flex-row sm:items-center">
            <Link
              href="#destinations"
              className={cn(
                buttonVariants(),
                "h-14 gap-3 rounded-none bg-brand px-8 text-xs font-semibold tracking-[0.18em] text-white uppercase hover:bg-brand/90 sm:h-[60px] sm:px-10"
              )}
            >
              Explore Now
              <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
            <Link
              href="#destinations"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "h-14 rounded-none border border-white/25 bg-white/15 px-8 text-xs font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-sm hover:bg-white/25 hover:text-white sm:h-[60px] sm:px-9"
              )}
            >
              View Destination
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/25 bg-white/20 backdrop-blur-md">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_10rem]">
          <label className="flex flex-col gap-0.5 border-b border-white/20 px-5 py-3 sm:border-r lg:border-b-0 lg:px-7">
            <span className="text-sm font-medium text-white">Location</span>
            <Input
              type="text"
              placeholder="Address, City Or Zip"
              className="h-auto rounded-none border-0 bg-transparent p-0 text-xs text-white/85 placeholder:text-white/85 focus-visible:border-0 focus-visible:ring-0 md:text-xs dark:bg-transparent"
            />
          </label>

          {searchFields.map((field) => (
            <button
              key={field.label}
              type="button"
              className="flex flex-col items-start gap-0.5 border-b border-white/20 px-5 py-3 text-left transition-colors hover:bg-white/10 sm:border-r lg:border-b-0 lg:px-7"
            >
              <span className="text-sm font-medium text-white">
                {field.label}
              </span>
              <span className="text-xs text-white/85">{field.value}</span>
            </button>
          ))}

          <button
            type="button"
            className="h-14 w-full bg-brand text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand/90 sm:col-span-2 lg:col-span-1 lg:h-auto lg:min-h-16"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
