import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { cn } from "cn"

import ctaImage from "@/assets/CTA.png"
import { buttonVariants } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative isolate flex min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] items-center justify-center overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Background Aerial Island & Airplane Image */}
      <Image
        src={ctaImage}
        alt="Aerial view of an airplane flying over a lush tropical island with turquoise ocean"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
        priority={false}
      />

      {/* Multi-layer Gradient Background Overlay for Vignette Effect */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/30 to-black/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/50 via-transparent to-black/50"
      />

      {/* Center Content */}
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-normal tracking-tight text-white sm:text-5xl lg:text-[3.6rem] leading-[1.12]">
          Ready To Start Your Journey?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-white/90 sm:text-base md:text-lg">
          Join thousands of travelers who have discovered the world with us
        </p>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="#book"
            className={cn(
              buttonVariants(),
              "h-13 sm:h-14 rounded-none bg-white px-8 sm:px-10 text-xs sm:text-[13px] font-semibold tracking-[0.16em] text-foreground uppercase shadow-md transition-all hover:bg-white/95 hover:shadow-xl gap-3"
            )}
          >
            Book Your Trip Today
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
