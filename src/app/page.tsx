import { Banner } from "@/components/home/banner";
import { CtaSection } from "@/components/home/cta-section";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { Testimonials } from "@/components/home/testimonials";
import { WhyChooseUs } from "@/components/home/why-choose-us";
export default function Home() {
  return (
    <div className="min-h-svh flex flex-col">
      <main className="flex-1">
        <Banner />
        <FeaturedDestinations />
        <WhyChooseUs />
        <Testimonials />
        <CtaSection />
      </main>
    </div>
  );
}
