"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import wanderlustWhiteLogo from "@/assets/Wanderlast-1.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "#destinations" },
  { label: "My Bookings", href: "#bookings" },
  { label: "My Profile", href: "#profile" },
]

const supportLinks = [
  { label: "Help Center", href: "#help" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
]

export function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        {/* Top Brand Header */}
        <div className="max-w-xl">
          <Link href="/" className="inline-block" aria-label="Wanderlust">
            <Image
              src={wanderlustWhiteLogo}
              alt="Wanderlust"
              className="h-10 w-auto sm:h-12"
            />
          </Link>
          <p className="mt-3 text-sm font-light text-neutral-400 sm:text-base">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* 4 Columns Links Grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          {/* Column 1: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-white uppercase">
              Newsletter
            </h3>
            <p className="text-xs leading-relaxed text-neutral-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex h-11 w-full max-w-sm items-center bg-[#212121] px-3.5 transition-colors focus-within:ring-1 focus-within:ring-white/30"
            >
              <Input
                type="email"
                placeholder="Enter email"
                aria-label="Email address"
                className="h-full rounded-none border-0 bg-transparent p-0 text-xs text-white placeholder:text-neutral-500 focus-visible:ring-0 dark:bg-transparent"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                aria-label="Subscribe to newsletter"
                className="size-7 shrink-0 text-neutral-400 hover:bg-transparent hover:text-white"
              >
                <ArrowUpRight className="size-4" />
              </Button>
            </form>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-white uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-white uppercase">
              Support
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-white uppercase">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <a
                  href="tel:7869011622"
                  className="transition-colors hover:text-white"
                >
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wandarland.com"
                  className="transition-colors hover:text-white"
                >
                  info@wandarland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Icons */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-neutral-800/80 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © 2026 Wanderlust. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-neutral-400">
            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="transition-colors hover:text-white"
            >
              <svg
                className="size-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-white"
            >
              <svg
                className="size-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-white"
            >
              <svg
                className="size-4.5 stroke-current fill-none stroke-2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
