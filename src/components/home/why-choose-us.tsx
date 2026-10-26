import Image from "next/image"
import shieldCheckIcon from "@/assets/ShieldCheck.png"
import mapTrifoldIcon from "@/assets/MapTrifold.png"
import headsetIcon from "@/assets/Headset.png"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: shieldCheckIcon,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: mapTrifoldIcon,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: headsetIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-[#f0f9fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="rounded-none border-0 bg-white p-6 shadow-none ring-0 transition-all duration-300 hover:shadow-md sm:p-8 sm:py-10"
            >
              <CardContent className="p-0">
                <div className="mb-6 flex size-12 items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="size-9 object-contain"
                  />
                </div>

                <h3 className="font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
