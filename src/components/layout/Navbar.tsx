import Image from "next/image"
import Link from "next/link"
import { MenuIcon, UserIcon } from "lucide-react"
import { cn } from "cn"

import wanderlustLogo from "@/assets/Wanderlast.png"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Add Destination", href: "/add-destination" },
]

const authLinks = [
  { label: "Profile", href: "/profile", icon: true },
  { label: "Login", href: "/login", icon: false },
  { label: "Sign Up", href: "/signup", icon: false },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background">
      <div className="mx-auto grid h-14 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6 lg:h-16 lg:px-10">
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand",
                link.href === "/" ? "text-brand" : "text-foreground/85"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          aria-label="Wanderlust home"
          className="col-start-2 flex items-center justify-self-center"
        >
          <Image
            src={wanderlustLogo}
            alt="Wanderlust"
            priority
            className="h-[22px] w-auto"
          />
        </Link>

        <div className="col-start-3 flex items-center justify-end gap-5">
          <div className="hidden items-center gap-6 lg:flex">
            {authLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "inline-flex items-center gap-1.5 text-sm transition-colors hover:text-brand",
                  link.label === "Sign Up"
                    ? "font-semibold text-foreground"
                    : "font-medium text-foreground/85"
                )}
              >
                {link.icon && <UserIcon className="size-4" aria-hidden />}
                {link.label}
              </Link>
            ))}
          </div>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open navigation menu"
                />
              }
            >
              <MenuIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:max-w-xs">
              <SheetHeader className="flex-row items-center border-b py-3.5">
                <SheetTitle>
                  <Image
                    src={wanderlustLogo}
                    alt="Wanderlust"
                    className="h-[22px] w-auto"
                  />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Wanderlust navigation and account links
                </SheetDescription>
              </SheetHeader>

              <nav aria-label="Mobile" className="flex flex-col gap-1 px-3">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.label}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          "rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                          link.href === "/" ? "text-brand" : "text-foreground"
                        )}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>

              <Separator />

              <SheetFooter className="gap-1">
                {authLinks.map((link) => (
                  <SheetClose
                    key={link.label}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-muted",
                          link.label === "Sign Up"
                            ? "font-semibold text-foreground"
                            : "font-medium text-foreground/85"
                        )}
                      />
                    }
                  >
                    {link.icon && <UserIcon className="size-4" aria-hidden />}
                    {link.label}
                  </SheetClose>
                ))}
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
